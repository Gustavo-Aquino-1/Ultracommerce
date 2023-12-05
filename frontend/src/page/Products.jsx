import React, { useEffect, useState } from 'react'
import api from '../api'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const ProductsArea = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 7rem;

  .product_card {
    text-align: center;
  }

  margin-bottom: 50px;
`

function Products() {
  const [products, setProducts] = useState([])
  const [target, setTarget] = useState('')
  const [saveTarget, setSaveTarget] = useState('')
  const { push } = useHistory()

  useEffect(() => {
    setTarget("")
    const get = async () => {
      const { data } = await api.get('/product')
      setProducts(data)
    }
    get()
  }, [])

  const handleClick = (productId) => {
    push(`/product/${productId}`)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <input
          type='text'
          value={saveTarget}
          onChange={(e) => setSaveTarget(e.target.value)}
          placeholder='Search here'
          style={{ padding: 10, outline: 'none', border: 'none' }}
        />
        <button
          onClick={(e) => setTarget(saveTarget)}
          style={{
            padding: 10,
            letterSpacing: 1,
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>
      <ProductsArea>
        {products
          .filter((e) => e.name.toLowerCase().includes(target.toLowerCase()))
          .map((e) => (
            <div
              key={e.id}
              className='product_card'
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(e.id)}
            >
              <img src={e.img} width={300} alt={e.name} />
              <p style={{ textTransform: 'capitalize', fontSize: 18 }}>
                <strong>{`${e.name}`}</strong>
              </p>
              <p>{e.brand}</p>
              <p>
                <strong>R$</strong> {e.price}
              </p>
            </div>
          ))}
      </ProductsArea>
    </>
  )
}

export default Products
