import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

export const Contacts = () => {
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)

    await new Promise((resolve) => setTimeout(() => resolve(), 2000))

    const { name, phone, message } = data
    const token = '7105576872:AAGsRbcj7cRY-ZiWo4prMES5TlXOV_PP2WQ'
    const chatId = '407415106'
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const messageContent = `Ism: ${name} \nTelefon Nomer: ${phone} \nXabar: ${message}`

    axios({
      url: url,
      method: 'POST',
      data: {
        chat_id: chatId,
        text: messageContent,
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
    reset()
    setLoading(false)
  }

  return (
    <div className="bg-[#202733] py-32 max-lg:py-10 max-iphone:py-5">
      <div className="container w-[1440px] max-w-4/5 mx-auto py-20 max-iphone:py-5 z-10 max-sm:w-full relative">
        <div className="absolute inset-0 bg-contact-img bg-cover bg-center filter brightness-[70%] rounded-3xl"></div>
        <div className="relative z-20 pl-10 py-10 flex flex-col gap-5 w-1/2 max-lg:w-2/3 max-md:w-full max-md:pr-10 max-iphone:px-2 max-smallest:px-0">
          <h2 className="text-4xl text-slate-50 w-full max-iphone:text-2xl">
            {(t('contacts.title'))}
          </h2>

          {loading && (
            <div role="alert" className="alert alert-success mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-slate-200">{t('contacts.message')}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            data-aos="zoom-in"
          >
            <div>
              <input
                type="text"
                placeholder={t("contacts.namePlaceholder")}
                className="input input-bordered w-full"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p className="text-red-600">{t("contacts.errorMessage")}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder={t("contacts.phonePlaceholder")}
                className="input input-bordered w-full"
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <p className="text-red-600">{t("contacts.errorMessage")}</p>
              )}
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder={t("contacts.textPlaceholder")}
              rows={8}
              {...register('message', { required: false })}
            ></textarea>
            <div className="w-1/3 max-lg:w-2/3 max-smallest:w-full border-2 border-solid text-center bg-slate-600 py-1 hover:border-slate-800 max-sm:py-1 rounded-full hover:bg-slate-100 hover:text-slate-800 text-slate-200 transition-all cursor-pointer max-sm:w-3/5 max-sm:mt-5 max-sm:mx-auto">
              <button
                className="text-lg px-10 font-semibold max-sm:text-xs text-center"
                type="submit"
                disabled={loading}
              >
                {loading ? t("contacts.loading") : t("contacts.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
