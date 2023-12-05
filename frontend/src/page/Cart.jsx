import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import styled from 'styled-components'
import api from '../api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const CartArea = styled.div`
  font-size: 20px;
  .ct_op_btn {
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
  }

  .btn_buy {
    display: block;
    margin: auto;
    background-color: black;
    color: white;
    border: none;
    padding: 10px 60px;
    border-radius: 2px;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 2px;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }

  .product_cart_card {
    color: black;
    &:hover {
      color: #050565;
    }
  }
`

function Cart() {
  const { cnUser, cart, setCart } = useContext(Context)
  const [total, setTotal] = useState(0)
  const { push } = useHistory()

  useEffect(() => {
    setTotal(
      Object.values(cart).reduce((a, c) => (a += c.price * c.quantity), 0),
    )
  }, [cart])

  const handleProduct = (productName, action = '+') => {
    const cpCart = { ...cart }
    if (action === '+') cpCart[productName].quantity += 1
    else cpCart[productName].quantity -= 1

    if (cpCart[productName].quantity === 0) delete cpCart[productName]
    setCart(cpCart)
  }

  const createSale = async () => {
    const body = { total }
    body['products'] = Object.values(cart).map(({ productId, quantity }) => ({
      productId,
      quantity,
    }))

    try {
      await api.post("/sale", body, {
        headers: { "Authorization": cnUser.token }
      })
      alert('Yesss, your purchase was made sucessfully!')
      push("/sales")
      setCart({})
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <CartArea style={{ marginLeft: 40 }}>
      <h3 style={{ textAlign: 'center' }}>Total: R$ {total}</h3>
      <button onClick={createSale} className='btn_buy'>
        Buy
      </button>
      {Object.keys(cart)?.map((e) => (
        <div
          className='product_cart_card'
          key={e}
          style={{ display: 'flex', alignItems: 'center', gap: 20 }}
        >
          <img src={cart[e].img} width={300} alt={cart[e].name} />
          <div>
            <p>{cart[e].name}</p>
            <p>R$ {cart[e].price}</p>
            <button
              className='ct_op_btn'
              onClick={() => handleProduct(cart[e].name, '-')}
            >
              -
            </button>
            <span> {cart[e].quantity} </span>
            <button
              className='ct_op_btn'
              onClick={() => handleProduct(cart[e].name)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </CartArea>
  )
}

export default Cart
