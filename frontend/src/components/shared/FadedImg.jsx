import { useState } from 'react'

export default function FadeImg({ className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      {...props}
      onLoad={() => setLoaded(true)}
      className={className + ' transition-opacity duration-500 ' + (loaded ? 'opacity-100' : 'opacity-0')}
    />
  )
}