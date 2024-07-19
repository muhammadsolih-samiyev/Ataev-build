import { Button } from './Button'
import { useTranslation } from 'react-i18next'

export const Info = () => {
  const { t } = useTranslation()
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-info-img bg-cover bg-center filter brightness-[70%]"></div>
      <div className="relative flex flex-col justify-center w-full h-full z-10">
        <div
          className="container w-[1440px] max-w-4/5 mx-auto py-20 z-10 max-md:px-2 max-sm:w-full"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="w-1/3 max-lg:w-1/2 max-sm:w-full flex flex-col gap-10">
            <p className="text-3xl text-slate-50 font-semibold max-sm:text-xl">
              {t('info.brandName')}
            </p>
            <p className="text-6xl text-slate-50 font-semibold max-sm:text-4xl">
              {t('info.brandName')}
            </p>
            <p className="text-xl text-slate-50 font-semibold max-sm:text-sm">
              {t('info.brandText')}
            </p>
            <Button text={t('info.brandButton')} />
          </div>
        </div>
      </div>
    </div>
  )
}
