import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mekadeeraj-k')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='p-4 text-3xl text-center text-white bg-gray-600'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={100} />
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mekadeeraj-k')
    return response.json()
}