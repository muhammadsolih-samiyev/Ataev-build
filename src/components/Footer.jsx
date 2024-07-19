import footerLogo from '../images/ataev2.563d9f6552a0ae9e7a2b.png'
import { useTranslation } from 'react-i18next'
export const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-[#fce8bd]">
      <div className="container flex flex-col justify-center w-[1440px] max-w-4/5 mx-auto py-14 z-10 max-md:px-2 max-sm:w-full">
        <div className="flex justify-between max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-10 max-iphone:grid-cols-1">
          <div className="flex flex-col gap-5 max-iphone:items-center">
            <div className="w-[150px]">
              <img src={footerLogo} alt="Footer Logo" />
            </div>
            <p className="text-slate-800 text-3xl font-semibold max-iphone:text-center max-smallest:text-2xl">
              {t("footer.title")}
            </p>
            <div className="flex gap-5 items-center">
              <div className="rounded-full py-5 px-6 bg-black">
                <i className="fa-brands fa-square-instagram text-slate-300 text-2xl"></i>
              </div>
              <div className="rounded-full py-5 px-6 bg-black">
                <i className="fa-brands fa-facebook text-slate-300 text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-iphone:items-center">
            <p className="text-slate-900 text-3xl font-semibold max-smallest:text-2xl">{t("footer.company")}</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">{t("footer.enterprises")}</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">{t("footer.about")}</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">{t("footer.news")}</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">{t("footer.projects")}</p>
          </div>
          <div className="flex flex-col gap-5 max-iphone:items-center">
            <p className="text-slate-900 text-3xl font-semibold max-smallest:text-2xl">{t("footer.communication")}</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">+998974839999</p>
            <p className="text-slate-500 text-xl font-semibold max-smallest:text-xl">+998997126666</p>
          </div>
        </div>
      </div>
    </div>
  )
}
