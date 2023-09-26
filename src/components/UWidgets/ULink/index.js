import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { Client } from "@xmtp/xmtp-js";
import { AvatarResolver, utils as avtUtils } from "@ensdomains/ens-avatar";

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  cursor: pointer;
`;
const ULinkWrapper = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ULinkContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  pointer-events: auto;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 80px;
    background-color: rgb(56, 136, 255);
    z-index: -1;
    @media (max-width: 799px) {
      height: 80px;
    }
  }
`;

const LinkDomain = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1em;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 40px;
`;

const Instructions = styled.p`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3rem;
  width: 90%;
`;

const ListItemButton = styled.a`
  font-weight: bold;
  display: inline-flex;
  width: 80%;
  @media (max-width: 799px) {
    width: 80%;
  }
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  padding: 12px 20px;
  border-radius: 20px;
  margin-bottom: 2px;
  border: 1px solid #333333;
  color: #000;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  text-decoration: none;
  color: inherit;
  text-align: center;
  background-color: white;
  margin-bottom: 30px;

  &:hover .logo {
    transform: rotate(360deg);
    transition: transform 0.5s ease;
  }
  cursor: hand;
`;

const ULinkIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
  transition: all 0.5s ease;
  border-radius: 5px;
  cursor: pointer;
  &.logo:hover {
    transform: rotate(360deg);
  }
`;

export function ULink({
  walletAddress: initialWalletAddress,
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp.chat/dm/${initialWalletAddress}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp.chat",
    },
  },
  theme = "default",
  size = "medium",
  device = "All",
}) {
  const [walletAddress, setWalletAddress] = useState(initialWalletAddress);
  const [message, setMessage] = useState("");
  const [loadingResolve, setLoadingResolve] = useState(false);
  const [deviceSpecificApps, setDeviceSpecificApps] = useState([]);

  let { domain } = useParams();
  domain = domain || "shanemac.eth";

  useEffect(() => {
    const devicep = detectDevice(device);
    const deepLinkAppsArray = Object.values(deepLinkApps);
    const filteredApps = filterAppsByDevice(deepLinkAppsArray, devicep);
    setDeviceSpecificApps(filteredApps);
  }, []);

  const [avatar, setAvatar] = useState(null);

  const resolveDomainToAddress = async () => {
    setLoadingResolve(true); // Set loading to true here
    try {
      const provider = new ethers.providers.CloudflareProvider();
      const resolvedAddress = await provider.resolveName(domain);
      const isEthDomain = /\.eth$/.test(domain);
      const isValidEthereumAddress = /^0x[a-fA-F0-9]{40}$/.test(
        resolvedAddress,
      );

      if (resolvedAddress && isEthDomain && isValidEthereumAddress) {
        setWalletAddress(resolvedAddress);
        const avt = new AvatarResolver(provider);
        const avatarURI = await avt.getAvatar(domain);
        setAvatar(avatarURI);
      } else {
        setMessage("Invalid Ethereum address");
        setWalletAddress(null);
      }
    } catch (error) {
      console.log(error);
      setMessage("Error resolving address");
    } finally {
      setLoadingResolve(false);
    }
  };

  useEffect(() => {
    if (domain) {
      resolveDomainToAddress();
    }
  }, [domain]);

  const detectDevice = (device) => {
    const userAgent = window.navigator.userAgent;
    if (/Mobi|Android/i.test(userAgent)) return "Android";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
    return device ? device : "Desktop";
  };

  const filterAppsByDevice = (apps, device) => {
    return apps.filter(
      (app) => app.device.includes(device) || app.device.includes("All"),
    );
  };

  const [canMessage, setCanMessage] = useState(null);
  useEffect(() => {
    const checkCanMessage = async () => {
      const result = await Client.canMessage(walletAddress);
      setCanMessage(result);
    };

    checkCanMessage();
  }, [walletAddress]);

  return (
    <ULinkContainer>
      {avatar ? (
        <Avatar src={avatar} alt="User Avatar" width={100} />
      ) : (
        <SVGLogo width={100} />
      )}
      <ULinkWrapper>
        <LinkDomain>{domain}</LinkDomain>
        <Instructions>
          Just send a message to <b>{domain} </b>
          using your preferred XMTP inbox, and hit send!
        </Instructions>
        {canMessage !== null && (
          <>
            {canMessage ? (
              deviceSpecificApps.map((app, index) => (
                <ListItemButton
                  key={index}
                  target="_newtab"
                  href={app.url
                    .replace("{walletAddress}", walletAddress)
                    .replace("{domain}", domain)}
                  theme={theme}
                  style={{
                    cursor: "pointer !important",
                    zIndex: 2,
                    opacity: loadingResolve ? 0.5 : 1,
                    pointerEvents: loadingResolve ? "none" : "auto",
                  }}
                  size={size}>
                  <ULinkIcon
                    src={app.icon}
                    alt={`${app.name} Icon`}
                    width="50px"
                    className="logo"
                  />
                  Message on {app.name}
                </ListItemButton>
              ))
            ) : (
              <p>
                You cannot send a message bacause this walet is not on the xmtp
                network.
              </p>
            )}
          </>
        )}
      </ULinkWrapper>
    </ULinkContainer>
  );
}

function SVGLogo({ width }) {
  return (
    <svg
      width={width}
      height={width}
      className="logo"
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#fc4f37"
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </svg>
  );
}
