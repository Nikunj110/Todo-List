import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data,setdata] = useState([]);

    // useEffect(() => {
    //   fetch('https://api.github.com/users/Nikunj110')
    //   .then(res =>res.json())
    //   .then(data=>{
    //     console.log(data);
    //     setdata(data)
    //   })
    
     
    // }, [])
    

  return (
    <div className='text-center m-4 bg-green-700 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url   } alt="Git Picture" width={300} />
    </div>
  )
}
export default Github   
// Another way but optimal way to return 

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Nikunj110')
    return response.json();
}