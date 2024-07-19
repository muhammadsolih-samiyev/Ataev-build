import PropTypes from 'prop-types'

export const Button = ({ text }) => {
  return (
    <div className="w-fit border-2 border-solid text-center bg-slate-800 py-1 hover:border-slate-800 max-sm:py-1 rounded-full hover:bg-slate-100 hover:text-slate-800 text-slate-200 transition-all cursor-pointer max-sm:w-3/5 max-sm:mt-5 max-sm:mx-auto">
      <button className="text-lg px-10 font-semibold max-sm:text-xs">
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}
