import img1 from '../images/construction.74a5b49f569267df13c8.jpg'
import img2 from '../images/news.91d41923640e2fa9a037.jpg'
import img3 from '../images/news2.a6503f342d0d2e748340.jpg'
import img4 from '../images/news3.44f09827240dc2fb8309.jpg'
import { Button } from './Button'
import { useTranslation } from 'react-i18next'
export const News = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-[#f7f7f7]">
      <div className="container w-[1440px] max-w-4/5 mx-auto mt-10 max-sm:px-2 max-sm:w-full">
        <div>
          <h1 className="text-4xl">{t("newsSection.title")}</h1>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-xl:gap-5 mt-10">
          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img1} alt={t("newsSection.constr")} className="w-full h-full object-cover rounded-l-3xl max-sm:rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text={t("newsSection.newsButton")} />
              <h2 className="text-2xl font-semibold">{t("newsSection.subTitle")}</h2>
              <p className="text-sm text-slate-700">{t("newsSection.text")}</p>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img2} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text={t("newsSection.newsButton")} />
              <h2 className="text-2xl font-semibold">{t("newsSection.subTitle2")}</h2>
              <p className="text-sm text-slate-700">{t("newsSection.text2")}</p>
            </div>
          </div>

          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img3} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text={t("newsSection.newsButton")} />
              <h2 className="text-2xl font-semibold">{t("newsSection.subTitle3")}</h2>
              <p className="text-sm text-slate-700">{t("newsSection.text3")}</p>
            </div>
          </div>

          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img4} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text={t("newsSection.newsButton")} />
              <h2 className="text-2xl font-semibold">{t("newsSection.subTitle4")}</h2>
              <p className="text-sm text-slate-700">{t("newsSection.text4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
