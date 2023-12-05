import React, { useMemo } from 'react'
import Context from './Context'
import useLocalStorage from '../hooks/useLocalStorage'

function Provider({ children }) {
  const [cnUser, setCnUser] = useLocalStorage("cnUser", {})
  const [cart, setCart] = useLocalStorage("cart", {})
  const contextValue = useMemo(() => ({
    cnUser,
    setCnUser,
    cart, 
    setCart
  }), [cart, cnUser, setCart, setCnUser])

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Provider