import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { MainContent } from '../components/MainContent'
import ToggleButtons from '../components/ToggleButtons'
import './custom.css'
import { Link } from 'react-router-dom'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className="homepageHeader px-0 pt-12 lg:pt-16 h-[504px] bg-cover border-0 border-b border-solid border-b-black">
      <div className="container text-left py-0 xl:px-12 m-auto max-w-screen-max">
        <Link to="vision/litepaper">
          <div className="rounded-full border border-blue-300 bg-blue-50 text-xs font-semibold text-blue-800 border-solid px-2.5 py-0.5 mb-3 lg:mb-4 w-fit">
            📄 Read the XMTP Litepaper - public draft »
          </div>
        </Link>
        <h1 className="hero__title max-w-2xl text-4xl lg:text-5xl">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle max-w-2xl text-lg lg:text-xl">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light')
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    const element = document.getElementsByClassName('navbar__inner')[0]
    element.classList.add('navbar__inner__padding')
  }, [])

  return (
    <Layout title={`${siteConfig.title}`} description="Homepage">
      <HomepageHeader />
      <MainContent styles={styles} />
    </Layout>
  )
}
