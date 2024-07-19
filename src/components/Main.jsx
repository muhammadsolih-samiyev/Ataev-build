import { Button } from './Button'
import { useTranslation } from 'react-i18next'
export const Main = () => {
  const { t } = useTranslation()
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <div className="absolute bg-main-image inset-0 filter brightness-[70%]"></div>
      <div className="relative flex flex-col justify-center w-full h-full z-10">
        <div className="container flex flex-col justify-center w-[1440px] max-w-4/5 mx-auto py-28 z-10 max-md:px-2 max-sm:w-full">
          <div className="flex flex-col justify-center gap-10 text-white" data-aos="fade-right">
            <div className="leading-7">
              <p className="text-8xl font-semibold max-md:text-4xl">{t("main.surname")}</p>
              <p className="text-8xl font-semibold max-md:text-4xl">
                {t("main.name")}
              </p>
            </div>
            <p className="text-lg font-normal">{t("main.slogan")}</p>
            <div className="flex items-center gap-5 max-smallest:flex-col max-smallest:gap-0 max-smallest:items-start">
              <Button text={t("main.button1")} />
              <Button text={t("main.button2")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
