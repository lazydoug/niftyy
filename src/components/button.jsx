// TODO: animate click event

function Button({ children, className }) {
  return (
    <button className={`text-button-lg rounded ${className}`}>
      {children}
    </button>
  )
}

export default Button
