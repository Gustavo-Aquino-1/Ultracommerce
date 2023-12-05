import React, { useContext, useEffect, useState } from 'react'
import api from '../api'
import Context from '../context/Context'
import { useHistory } from 'react-router-dom'

function Sales() {
  const { cnUser } = useContext(Context)
  const [sales, setSales] = useState([])
  const { push } = useHistory()

  useEffect(() => {
    const get = async () => {
      const { data } = await api.get('/sale', {
        headers: { Authorization: cnUser.token },
      })
      setSales(data)
    }
    get()
  }, [])

  const handleClick = (saleId) => {
    push(`/sale/${saleId}`)
  }

  return (
    <div>
      {sales.length === 0 && (
        <h2 style={{ textAlign: 'center', letterSpacing: 2}}>You don't have boughts!</h2>
      )}
      {sales?.map((e) => (
        <div style={{ marginLeft: 20}} key={e.id}>
          <p>{`Date: ${e.saleDate.split('T')[0].replaceAll('-', '/')}`}</p>
          <p>{`Total: R$ ${e.total}`}</p>
          {(new Date() - new Date(e.saleDate)) / 1000 / 60 / 60 >= 0 && (
            <button
              onClick={() => handleClick(e.id)}
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '5px 30px',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer'
              }}
            >
              Rate Products
            </button>
          )}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Sales
