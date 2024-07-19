import house1 from '../images/house1.6506c5f9ebc7179c4e1b.jpg'
import house2 from '../images/house2.496bd7ea5a38fd64835b.jpg'
import house3 from '../images/house3.84b231f0b8621e4984d8.jpg'
import house4 from '../images/house4.5271b2a77e32b5cd8eb7.jpg'
import house5 from '../images/house5.de4d959177742b856d4d.jpg'
import house6 from '../images/house6.0f044c074c3e400f1049.jpg'
import { useTranslation } from 'react-i18next'

export const DreamHome = () => {
  const { t } = useTranslation()
  return (
    <div className="">
      <div className="text-center my-10">
        <p className="text-4xl">{t("dream.title")}</p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="w-full">
          <img
            className="w-full h-[350px] object-cover"
            src={house1}
            alt={t("dream.houseImages.house1")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={house2}
            alt={t("dream.houseImages.house2")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={house3}
            alt={t("dream.houseImages.house3")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={house4}
            alt={t("dream.houseImages.house4")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={house5}
            alt={t("dream.houseImages.house5")}
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={house6}
            alt={t("dream.houseImages.house6")}
          />
        </div>
      </div>
    </div>
  )
}
