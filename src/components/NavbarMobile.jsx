import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NavbarMobile = ({ handleLogoClick, logo }) => {
  const { t, i18n } = useTranslation()
  const [checked, setChecked] = useState(false)

  const handleToggle = () => {
    setChecked(!checked)
  }

  const handleLinkClick = () => {
    setChecked(false)
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setChecked(false)
  }

  return (
    <>
      <div className="hidden max-lg:block max-lg:px-2">
        <div className="flex items-center justify-between">
          <label htmlFor="menu-toggle" onClick={handleToggle}>
            <i
              className={`fa-solid fa-${
                checked ? 'xmark' : 'bars-staggered'
              } cursor-pointer text-2xl max-sm:text-xl`}
            ></i>
          </label>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[100px] max-sm:w-[60px] object-cover">
              <img className="w-full" src={logo} alt={t("logo")} />
            </div>
          </div>
          <div className="py-1 px-2 bg-black rounded-full cursor-pointer">
            <i className="fa-solid fa-phone text-slate-50"></i>
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={checked}
        readOnly
      />
      <div
        className={`lg:hidden fixed ${
          checked ? 'left-0' : '-left-full'
        } top-0 w-full h-dvh toggled-bar flex flex-col bg-[#fce8bd] transition-all px-10 py-5 z-50`}
      >
        <div className="flex items-center pb-5 justify-between">
          <div className="flex items-center cursor-pointer"></div>
          <label
            htmlFor="menu-toggle"
            className="max-sm:text-xl"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-xmark text-2xl text-black cursor-pointer"></i>
          </label>
        </div>
        <div className="mt-5 flex">
          <ul className="flex flex-col gap-2">
            <li>
              <a className="text-xl font-medium" onClick={handleLinkClick}>
                {t('information')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#about"
                onClick={handleLinkClick}
              >
                {t('about')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#tours"
                onClick={handleLinkClick}
              >
                {t('enterprises')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#contacts"
                onClick={handleLinkClick}
              >
                {t('advantages')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#contacts"
                onClick={handleLinkClick}
              >
                {t('news')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#contacts"
                onClick={handleLinkClick}
              >
                {t('communication')}
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-5 mt-2">
          <li>
            <a className="text-xl font-medium cursor-pointer" onClick={() => changeLang('uz')}>
              UZ
            </a>
          </li>
          <li>
            <a className="text-xl font-medium cursor-pointer" onClick={() => changeLang('en')}>
              ENG
            </a>
          </li>
          <li>
            <a className="text-xl font-medium cursor-pointer" onClick={() => changeLang('ru')}>
              RU
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

NavbarMobile.propTypes = {
  handleLogoClick: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
}
