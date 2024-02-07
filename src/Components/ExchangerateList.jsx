import React,{useState, useEffect} from 'react'

import "./style.scss";

import fetchedExchangeRate from "../api/fetch";
import ExchangeRate from './ExchangeRate';

export default function ExchangerateList() {
  const [exchangerate, setExchangeRate] = useState([]);


useEffect(() => {
    const fetchData = async () => {
        try {
          const exchangeRateData = await fetchedExchangeRate();
          const exchangeRateArray = Object.entries(exchangeRateData).map(([key, value]) => ({
            currency: key,  
            ...value,       
          }));
          setExchangeRate(exchangeRateArray);
        } catch (error) {
          console.error('Помилка при отриманні обмінних курсів:', error);
        }
    }
     fetchData();    
     
},[]);
  return (
    <div className='exchange-section'>
       {
       exchangerate.map((item, index) => (
          <ExchangeRate key={index} item={item} />
        ))
      }
    </div>
  )
}
