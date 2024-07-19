import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export const OurCompany = () => {
  const { t } = useTranslation()
  const [employees, setEmployees] = useState(0)
  const [objects, setObjects] = useState(0)
  const [equipment, setEquipment] = useState(0)
  const [years, setYears] = useState(0)
  const sectionRef = useRef(null)
  const hasStarted = useRef(false)

  const countNumbers = () => {
    const interval = setInterval(() => {
      setEmployees((prev) => (prev < 120 ? prev + 1 : prev))
      setObjects((prev) => (prev < 43 ? prev + 1 : prev))
      setEquipment((prev) => (prev < 250 ? prev + 1 : prev))
      setYears((prev) => (prev < 2 ? prev + 1 : prev))
    }, 20)

    setTimeout(() => {
      clearInterval(interval)
    }, 5400)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          countNumbers()
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative w-full bg-cover bg-center bg-our-company"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative flex flex-col justify-center items-center w-full h-full z-10">
        <div className="container flex flex-col justify-center w-[1440px] max-w-4/5 mx-auto py-28 z-10 max-md:px-2 max-sm:w-full">
          <div className="w-full text-center">
            <p className="text-4xl text-slate-50">{t("company.title")}</p>
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 gap-5 mt-5 text-center">
            <div>
              <p className="text-6xl text-slate-50 font-bold max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
                {employees} +
              </p>
              <p className="text-2xl text-slate-50 font-semibold max-md:text-sm">
                {t("company.employees")}
              </p>
            </div>
            <div>
              <p className="text-6xl text-slate-50 font-bold max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
                {objects} +
              </p>
              <p className="text-2xl text-slate-50 font-semibold max-md:text-sm">
              {t("company.objects")}
              </p>
            </div>
            <div>
              <p className="text-6xl text-slate-50 font-bold max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
                {equipment} +
              </p>
              <p className="text-2xl text-slate-50 font-semibold max-md:text-sm">
              {t("company.equipment")}
              </p>
            </div>
            <div>
              <p className="text-6xl text-slate-50 font-bold max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
                {years} +
              </p>
              <p className="text-2xl text-slate-50 font-semibold max-md:text-sm">
              {t("company.years")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
