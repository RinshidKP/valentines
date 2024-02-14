import React, { useEffect, useState } from 'react'
const Quotes = () => {
    const [quote, setQuote] = useState({})
    useEffect(() => {
        const url = 'https://api.quotable.io/random?tags=love';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setQuote(data)
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }, [])
    return (
        <div className='h-screen flex flex-col justify-center items-center text-center'>
            <div className='mb-4 text-pink-800 text-2xl font-semibold font-sans text-ellipsis text-center h-5'>
                "{quote.content}"
            </div>
            <div className='text-left font-sans my-10 text-lg text-bold '>
                -{quote.author}
            </div>
        </div>

    )
}

export default Quotes
