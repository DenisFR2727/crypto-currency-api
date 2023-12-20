import React from 'react'

import "./style.scss";

export default function ExchangeRate({item}) {
  return (
    <div className='currency-content'>
            <p>{item.currency}</p>
            <p>USD: {item.USD}</p>
            <p>EUR: {item.EUR}</p>
            <p>USDT: {item.USDT}</p>
    </div>
  )
}
