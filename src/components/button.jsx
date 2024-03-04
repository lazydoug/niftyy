import { Children } from 'react'

function Button({ children, className }) {
  return (
    <button
      className={`text-button-lg rounded ${className}`}
      style={{ padding: '20px' }}>
      {children}
    </button>
  )
}

export default Button
