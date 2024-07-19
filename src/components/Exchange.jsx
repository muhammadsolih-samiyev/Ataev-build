import gallery1 from '../images/gallery1.323b40a21da097cb0e9f.jpg'
import gallery2 from '../images/gallery2.db1310c2308c289176da.jpg'
import gallery3 from '../images/gallery3.b69521e967c812c792b2.jpg'
import gallery4 from '../images/gallary4.6864081bbc6c5f87cffa.jpg'
import gallery5 from '../images/gallery5.a3ea745cffd972d946a5.jpg'
import gallery6 from '../images/gallery6.77d03be1807faf0577c7.jpg'
import { useTranslation } from 'react-i18next'

export const Exchange = () => {
  const { t } = useTranslation()
  return (
    <div className="">
      <div className="text-center my-10">
        <p className="text-4xl">{t("exchange.title")}</p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="w-full">
          <img
            className="w-full h-[350px] object-cover"
            src={gallery1}
            alt={t("exchange.houseImages.house1")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery2}
            alt={t("exchange.houseImages.house2")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery3}
            alt={t("exchange.houseImages.house3")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery4}
            alt={t("exchange.houseImages.house4")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery5}
            alt={t("exchange.houseImages.house5")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery6}
            alt={t("exchange.houseImages.house6")}
          />
        </div>
      </div>
    </div>
  )
}
