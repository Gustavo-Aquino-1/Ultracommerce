import React, { useContext, useEffect, useState } from 'react'
import api from '../api'
import { BsFillCartPlusFill } from 'react-icons/bs'
import Context from '../context/Context'

function ProductDetails({
  match: {
    params: { id },
  },
}) {
  const [product, setProduct] = useState({})
  const [avaliations, setAvaliations] = useState([])
  const [average, setAverage] = useState(0)
  const { cart, setCart } = useContext(Context)

  useEffect(() => {
    const get = async () => {
      const { data } = await api.get(`product/${id}`)
      setProduct(data[0])
      setAvaliations(data[1])
      setAverage(data[1].reduce((a, c) => (a += c.rate), 0) / data[1].length)
    }
    get()
  }, [])

  const handleClick = () => {
    const cpCart = { ...cart }
    if (cpCart[product.name]) cpCart[product.name].quantity += 1
    else {
      cpCart[product.name] = {
        ...product,
        productId: product.id,
        quantity: 1,
      }
    }
    setCart(cpCart)
    alert('Produto adicionado ao carrinho!')
  }

  return (
    <div style={{ textAlign: 'center', overflow: 'hidden' }}>
      <span
        onClick={handleClick}
        style={{ position: 'absolute', right: 0, marginRight: 20 }}
      >
        <BsFillCartPlusFill size={25} />
      </span>
      <h2 style={{ textTransform: 'capitalize' }}>
        {product?.brand} {product?.name}
      </h2>
      <img src={product?.img} width='400' alt='' />
      <h2>{`R$ ${product?.price}`}</h2>

      <div style={{ marginLeft: 100, textAlign: 'left', marginTop: 50 }}>
        <p style={{ maxWidth: '80%', textAlign: 'justify', letterSpacing: 1, fontSize: 18, lineHeight: 1.7 }}>
          <strong>Description:</strong> {product?.description}
        </p>
      </div>

      <div style={{ marginLeft: 100, textAlign: 'left' }}>
        {average > 0 && <p style={{ fontSize: 18}}>Average ⭐: {average}</p>}
        {avaliations?.map((e) => (
          <div style={{ marginLeft: 20 }} key={`${e.productId}${e.userId}`}>
            <p>{'⭐'.repeat(e.rate)}</p>
            <p style={{ maxWidth: '80%', textAlign: 'justify', letterSpacing: 1, fontSize: 18}}>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
