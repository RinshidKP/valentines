import { useEffect, useState } from 'react'
import birds from './assets/Animation - 1707905941060.gif'
import './App.css'
import Quotes from './components/Quotes.jsx'

function App() {
  const [count, setCount] = useState({})
  useEffect(() => {
    const url = 'https://api.unsplash.com/search/photos?query=valentine';
    const accessKey = 'TXuzMhdcriVX4BTAmjkC3jv9UC4Dc5UOj_ZTMhrARnc';
    fetch(url, {
      headers: {
        'Authorization': `Client-ID ${accessKey}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setCount(data.results[randomNumber].urls.full)
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

  })
  return (
    <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${count})` }}>
      <div className='flex flex-col justify-center items-center h-full'>
        {/* <p className='text-center text-white'>Hello Valentine</p> */}
        <Quotes />
        <div>
          <img src={birds} alt="" />
        </div>
      </div>
    </div>

  )
}

export default App
