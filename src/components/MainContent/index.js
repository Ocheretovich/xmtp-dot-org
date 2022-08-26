import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import { HeaderBox } from '../HeaderBox'
import { SliderItem } from '../SliderItem'
import { HEADER_DATA, SLIDER_ITEMS, BLOG_DATA } from '../../helpers/constants'
import { BlogItem } from '../BlogItem'

export const MainContent = ({ styles }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <main className={`max-w-screen-max mx-4 lg:mx-4 xl:mx-auto ${colorMode}`}>
        <div
          className={`${styles.bannerCards} -mt-32 flex-wrap lg:flex-nowrap`}
        >
          {HEADER_DATA.map(({ title, subtitle }) => (
            <HeaderBox key={title} title={title} subtitle={subtitle} />
          ))}
        </div>
        <div className="flex mt-20 max-w-screen-max mx-auto flex-wrap-reverse">
          <img
            className="h-[504px] lg:h-auto object-cover max-w-fit overflow-hidden -ml-4 basis-1/2"
            src={
              colorMode === 'light'
                ? '/img/build-xmtp.png'
                : '/img/build-xmtp-dark.png'
            }
            alt="laptop"
          />
          <div className="max-w-[437px] mx-4">
            <h4 className="text-4xl font-bold mb-2">Build with XMTP</h4>
            <small className="text-base text-neutral-800 dark:text-neutral-300">
              Deliver apps and tools that enable messaging between blockchain
              accounts. Want to talk about a use case?
              <span className="text-red-500 font-bold">
                Join in the discussion
              </span>
            </small>
            <ul>
              <li className="flex mt-10 flex-row">
                <img className="w-12 h-12 mr-4" src="/img/alerts-icon.png" />
                <div>
                  <p className="text-black dark:text-white text-xl font-bold mb-2">
                    Alerts
                  </p>
                  <small className="text-base">
                    Enable apps to keep users informed with timely event-based
                    notifications
                  </small>
                </div>
              </li>
              <li className="flex mt-6 flex-row">
                <img className="w-12 h-12 mr-4" src="/img/announce-icon.png" />
                <div>
                  <p className="text-black dark:text-white text-xl font-bold mb-2">
                    Announcements
                  </p>
                  <small className="text-base">
                    Enable apps to engage users with meaningful one-to-many
                    messaging
                  </small>
                </div>
              </li>
              <li className="flex mt-6 flex-row">
                <img className="w-12 h-12 mr-4" src="/img/dm-icon.png" />
                <div>
                  <p className="text-black dark:text-white text-xl font-bold mb-2">
                    Direct messaging
                  </p>
                  <small className="text-base">
                    Enable users to connect and build community with one-to-one
                    messaging
                  </small>
                </div>
              </li>
            </ul>
            <button className="bg-red-500 text-white border-none rounded-lg py-3 px-5 font-bold text-base w-44 mt-10 h-12 cursor-pointer hover:bg-red-600 mb-14 xl:mb-0 mx-auto block">
              <img
                className="w-5 h-5 mr-2 align-middle"
                src="/img/xmtp-sm-icon.png"
              />
              Start building
            </button>
          </div>
        </div>
        <div className="mt-14 ml-12 hidden mb-12 relative lg:flex">
          <div className="w-56 mr-6 mt-4">
            <p className="text-xl font-bold mb-2">SDK and tools</p>
            <small className="text-base">
              Use the SDK and dev tools to help you build with XMTP
            </small>
          </div>
          <div className="flex">
            <img
              onClick={() => {
                document.getElementsByClassName(
                  'inner-div'
                )[0].scrollLeft -= 100
              }}
              src={
                colorMode === 'light'
                  ? '/img/right-arrow.svg'
                  : '/img/right-arrow-dark.svg'
              }
              className="-scale-x-100 cursor-pointer"
            />
          </div>
          <div className="inner-div flex flex-nowrap overflow-x-scroll w-3/4 flex-1 scroll-smooth">
            {SLIDER_ITEMS.map((items) => (
              <SliderItem key={items.title} items={items} />
            ))}
          </div>
          <div className="arrow-icon w-40 h-[128px] absolute right-0 flex justify-center">
            <img
              onClick={() => {
                document.getElementsByClassName(
                  'inner-div'
                )[0].scrollLeft += 100
              }}
              src={
                colorMode === 'light'
                  ? '/img/right-arrow.svg'
                  : '/img/right-arrow-dark.svg'
              }
              className="cursor-pointer w-12"
            />
          </div>
        </div>
        <div className="flex flex-col mt-20 lg:mt-24 h-[1064px] max-w-screen-max bg-black mx-0 xl:mx-12 mb-14 rounded-2xl bg-cover bg-no-repeat bg-[url('/img/animation-bg.svg')]">
          <div className="flex">
            <div className="mt-12 mr-40">
              <img src="/img/browser.png" />
            </div>
            <div>
              <img src="/img/mobile.png" />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center -mt-10">
            <h1 className="text-white text-4xl font-bold mb-4">
              Messages meet users where they are
            </h1>
            <p className="text-neutral-300 text-base leading-6 text-center max-w-[656px] mb-8">
              Building with XMTP gives users a portable inbox that follows them
              across web3, providing access to their messages using any app
              built with XMTP.
            </p>
            <button className="bg-white rounded-lg w-52 h-12 text-black font-bold text-base cursor-pointer border-0">
              Read more about this
            </button>
          </div>
        </div>

        <div className="mx-0 xl:mx-12 mb-10">
          <h1 className="text4xl font-bold mb-4">Latest from XMTP</h1>
          <div className="h-[1px] bg-black dark:bg-neutral-500 w-full mb-8"></div>
          <div className="flex flex-wrap flex-col lg:flex-row lg:flex-nowrap">
            {BLOG_DATA.map((items) => (
              <BlogItem key={items.title} items={items} />
            ))}

            {/*  <div className="mx-11"></div> */}
          </div>
        </div>

        <div className="flex flex-col mt-14 min-h-[384px] max-w-screen-max border border-solid border-black bg-white mx-0 xl:mx-12 mb-14 rounded-2xl bg-cover bg-no-repeat relative px-8">
          <div className="flex justify-center flex-col items-center mt-12 text-center">
            <h1 className="text-black text-4xl font-bold mb-4">
              Join a community of builders
            </h1>
            <p className="text-neutral-800 text-sm leading-6 text-center max-w-[656px] mb-8">
              From hackathons to startups, developers are building with XMTP to
              address crucial use cases for secure messaging for blockchain
              accounts
            </p>
            <button className="bg-black rounded-lg w-52 h-12 text-white font-bold text-sm cursor-pointer flex justify-center items-center border-0">
              <img src="/img/github-icon.svg" className="w-5 h-5 mr-2.5" />
              <div>Start building</div>
            </button>
          </div>
          <div className="flex justify-evenly mt-12 flex-wrap">
            <img
              src="/img/logo-example.svg"
              className="flex-1 object-none m-2.5"
            />
            <img
              src="/img/logo-example.svg"
              className="flex-1 object-none m-2.5"
            />
            <img
              src="/img/logo-example.svg"
              className="flex-1 object-none m-2.5"
            />
            <img
              src="/img/logo-example.svg"
              className="flex-1 object-none m-2.5"
            />
            <img
              src="/img/logo-example.svg"
              className="flex-1 object-none m-2.5"
            />
          </div>
        </div>
      </main>
      <div className="flex justify-center bg-neutral-900 -mt-64">
        <div className="flex max-w-screen-max mx-4 xl:mx-12 mb-16 w-full mt-60 justify-center flex-wrap lg:flex-nowrap">
          <div className="w-full max-w-[366px] xl:max-w-[426px] h-[308px] mb-8 rounded-2xl bg-neutral-200 bg-no-repeat bg-[url('/img/github-bg.png')] px-6 bg-top xl:bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 text-black">
              Have a question or idea?
            </h1>
            <p className="mb-4 leading-6 text-black">
              Start <span className="hidden xl:inline">or join</span> a
              discussion in the XMTP forum
            </p>
            <div className="h-px mb-4 bg-black"></div>
            <p className="leading-6 text-right font-semibold text-black">
              GitHub Discussions →
            </p>
          </div>
          <div className="w-full max-w-[366px] xl:max-w-[426px] h-[308px] mb-8 rounded-2xl bg-blue-700 md:mx-7 bg-no-repeat bg-[url('/img/discord-bg.png')] px-6 bg-top xl:bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 text-white">
              Chat with the XMTP community
            </h1>
            <p className="mb-4 leading-6 text-white">
              Come say 👋, GM, or wagmi!
            </p>
            <div className="h-px mb-4 bg-white"></div>
            <p className="leading-6 text-right font-semibold text-white">
              Discord →
            </p>
          </div>
          <div className="w-full max-w-[366px] xl:max-w-[426px] h-[308px] mb-8 rounded-2xl bg-sky-500 bg-no-repeat bg-[url('/img/twitter-bg.png')] px-6 bg-top xl:bg-right-top">
            <h1 className="text-xl font-bold mt-[183px] mb-1 text-white">
              Follow XMTP on Twitter
            </h1>
            <p className="mb-4 leading-6 text-white">
              Keep up with the latest news and insights
            </p>
            <div className="h-px mb-4 bg-white"></div>
            <p className="leading-6 text-right font-semibold text-white">
              Twitter →
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
