import { useTranslation } from 'react-i18next';
import gold from '../images/gold.65c168a0380a930adc5f.png';
import notebook from '../images/notebook.486f543adeb3860db378.png';
import settings from '../images/settings.c04baf6a149ca893f9bb.png';
import car from '../images/car.7a9117dbe6e748aa2f12.png';

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#fce8bd] pt-10">
      <div className="container w-[1440px] max-w-4/5 mx-auto max-sm:px-2 max-sm:w-full">
        <div className="text-center">
          <h1 className="text-4xl">{t('services.title')}</h1>
        </div>
        <div className="grid grid-cols-7 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-xl:w-4/5 max-md:w-full max-xl:mx-auto gap-5 my-10">
          <div className="pl-10 bg-[#2c3442] col-span-4 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10" data-aos="flip-left">
            <div className="flex flex-col sm:flex-row items-center justify-between h-full">
              <p className="text-xl text-slate-50">{t('services.service1.text')}</p>
              <img src={gold} alt={t('services.service1.alt')} className="sm:block hidden" />
            </div>
          </div>
          <div className="pl-10 bg-[#2c3442] col-span-3 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10" data-aos="flip-left">
            <div className="flex flex-col sm:flex-row items-center justify-between h-full">
              <p className="text-xl text-slate-50">{t('services.service2.text')}</p>
              <img src={notebook} alt={t('services.service2.alt')} className="sm:block hidden" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-xl:w-4/5 max-md:w-full max-xl:mx-auto gap-5 mt-10 pb-10">
          <div className="pl-10 bg-[#2c3442] col-span-3 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10" data-aos="flip-left">
            <div className="flex flex-col sm:flex-row items-center justify-between h-full">
              <p className="text-xl text-slate-50">{t('services.service3.text')}</p>
              <img src={settings} alt={t('services.service3.alt')} className="sm:block hidden" />
            </div>
          </div>
          <div className="pl-10 bg-[#2c3442] col-span-4 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10" data-aos="flip-left">
            <div className="flex flex-col sm:flex-row items-center justify-between h-full">
              <p className="text-xl text-slate-50">{t('services.service4.text')}</p>
              <img src={car} alt={t('services.service4.alt')} className="sm:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
