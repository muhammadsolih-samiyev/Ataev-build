import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../images/ataev2.563d9f6552a0ae9e7a2b.png'
import { NavbarMobile } from './NavbarMobile'
// import { use } from 'i18next'

export const Navbar = () => {
  const [loading, setLoading] = useState(true)
  const { t, i18n } = useTranslation()

  const handleScroll = () => {
    const header = document.querySelector('header')
    if (window.scrollY > 250) {
      header.classList.add('bg-[#fce8bd]')
    } else {
      header.classList.remove('bg-[#fce8bd]')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleLogoClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const handleSelect = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
  }

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 py-4">
        <div className="container w-[1440px] max-w-4/5 mx-auto max-lg:hidden">
          <nav>
            <ul className="flex items-center justify-between">
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  {t('information')} 
                </a>
              </li>
              <li className="list-none">
                <a className="text-xl font-bold text-slate-800" href="#about">
                  {t('about')} 
                </a>
              </li>
              <li className="list-none">
                <a className="text-xl font-bold text-slate-800" href="#tours">
                  {t('enterprises')} 
                </a>
              </li>
              <li className="list-none">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <div className="w-[200px] object-cover">
                    <img className="w-full" src={logo} alt={t("logo")} />
                  </div>
                </div>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {t('advantages')} 
                </a>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {t('news')} 
                </a>
              </li>
              <li className="list-none">
                <a
                  className="text-xl font-bold text-slate-800"
                  href="#contacts"
                >
                  {t('communication')}
                </a>
              </li>
              <li>
                <select
                  name=""
                  id=""
                  className="bg-transparent outline-none text-xl font-bold text-slate-800"
                  onChange={handleSelect}
                >
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                  <option value="uz">UZ</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
        <NavbarMobile handleLogoClick={handleLogoClick} logo={logo} />
      </header>
    </>
  )
}
