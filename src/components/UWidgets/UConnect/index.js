import React from "react";

import styled from "styled-components";

export function UConnect({
  domain,
  walletAddress,
  defaultApp = "xmtp",
  deepLinkApps = {
    xmtp: {
      url: `https://xmtp-react-widgets.vercel.app/link/${domain}`,
      icon: "https://xmtp.chat/favicon.ico",
      device: ["All"],
      name: "xmtp",
    },
  },
  theme = "default",
  showText = true,
}) {
  const selectedApp = deepLinkApps[defaultApp];

  return (
    <StyledUConnect
      href={selectedApp.url
        .replace("{walletAddress}", walletAddress)
        .replace("{domain}", domain)}
      target="_newtab"
      rel="noopener noreferrer"
      className={`uconnect ${theme}`}>
      <SVGLogo className="logo" />
      {showText && domain}
    </StyledUConnect>
  );
}

function SVGLogo({ theme, size }) {
  // Use theme to conditionally set fill color
  const determineFill = () => {
    if (theme === "dark") {
      return "#fc4f37";
    }
    if (theme === "light") {
      return "#fc4f37";
    }
    return "#fc4f37";
  };

  return (
    <LogoIcon
      className="logo"
      size={size}
      viewBox="0 0 462 462"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={determineFill()}
        d="M1 231C1 103.422 104.422 0 232 0C359.495 0 458 101.5 461 230C461 271 447 305.5 412 338C382.424 365.464 332 369.5 295.003 349C268.597 333.767 248.246 301.326 231 277.5L199 326.5H130L195 229.997L132 135H203L231.5 184L259.5 135H331L266 230C266 230 297 277.5 314 296C331 314.5 362 315 382 295C403.989 273.011 408.912 255.502 409 230C409.343 131.294 330.941 52 232 52C133.141 52 53 132.141 53 231C53 329.859 133.141 410 232 410C245.674 410 258.781 408.851 271.5 406L283.5 456.5C265.401 460.558 249.778 462 232 462C104.422 462 1 358.578 1 231Z"
      />
    </LogoIcon>
  );
}

const StyledUConnect = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0px;
  background-color: transparent;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  color: ${({ theme }) => {
    if (theme === "dark") return "#ffffff";
    return "#333333"; // default and light
  }};
  &:hover {
    .logo {
      transform: rotate(360deg);
      fill: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    }

    .logo path {
      fill: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
    }
  }
`;

const LogoIcon = styled.svg`
  width: ${({ size }) => {
    if (size === "large") return "16px";
    if (size === "medium") return "12px";
    return "15px"; // medium and small
  }};

  margin-right: 5px;
  margin-top: 3px;
  margin-right: 5px;
  transition: all 0.5s ease;
`;
