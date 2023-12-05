import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imgs/logo_ultracommerce.png'
import { LuStore } from 'react-icons/lu'
import { BsWallet, BsCart } from 'react-icons/bs'
import { LiaWalletSolid } from 'react-icons/lia'
import { SiPlanetscale } from 'react-icons/si'


const HeaderArea = styled.header`
  section {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      height: 40px;
      padding: 10px 0;
      background-color: #000000;
      margin-bottom: 40px;
    
      a {
        text-decoration: none;
        color: #ffffff;
        letter-spacing: 1px;
        margin-right: 10px;
        &:hover {
          text-decoration: underline;
        }
        font-size: 18px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
  }

  p {
    margin-top: 19px;
    color: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
    letter-spacing: 3px;
    margin-left: 20px;
    font-size: 600;
    font-weight: 800;
  }
`

function Header() {
  return (
    <HeaderArea>
      <p>ULTRA <span><SiPlanetscale /></span></p>
      <section>
          <div>
            <Link to='/products'>Products</Link>
            <span><LuStore color='white' size={20} /></span>
          </div>

          <div>
            <Link to='/sales'>Sales</Link>
            <span><LiaWalletSolid color='white' size={20} /></span>
          </div>

          <div>
            <Link to='/cart'>Cart</Link>
            <span><BsCart color='white' size={20} /></span>
          </div>
      </section>
    </HeaderArea>
  )
}

export default Header
