import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context'
import api from '../api'

function AvaliateSales({
  match: {
    params: { id },
  },
}) {
  const { cnUser } = useContext(Context)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const get = async () => {
      const { data } = await api.get(`/sale/${id}`, {
        headers: { Authorization: cnUser.token },
      })
      setProducts(data)
    }
    get()
  }, [])

  const createAvaliation = async (productName, productId) => {
    const description = document.getElementById(productName+"-description").value
    const rate = document.getElementById(productName+"-rate").value
    try {
      await api.post(`/comment/${productId}`, { description, rate }, {
        headers: { "Authorization": cnUser.token }
      })
      alert('Avaliado com sucesso')
      window.location.reload()
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div style={{ marginLeft: 50 }}>
      {products?.map((e) => (
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 50 }}
          key={e.id}
        >
          <div>
            <h3>{e.name}</h3>
            <img width={200} src={e.img} alt={e.name} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <textarea
              id={`${e.name}-description`}
              placeholder='Write here about the product'
              cols='60'
              rows='10'
            />
            <select id={`${e.name}-rate`} style={{ padding: '5px 10px' }}>
              {[1, 2, 3, 4, 5].map((e) => (
                <option value={e}>{e}★</option>
              ))}
            </select>

            <button
              onClick={() => createAvaliation(e.name, e.id)}
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '5px 20px',
              }}
            >
              Rate
            </button>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <h2>You already rated all products of this sale! Thank you :)</h2>
      )}
    </div>
  )
}

export default AvaliateSales
