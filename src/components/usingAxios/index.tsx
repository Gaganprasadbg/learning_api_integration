"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { error } from 'console';

const UsingAxios = () => {

    const [data,setData]=useState<any | null>()

    const fetchData=async()=>{
        try{
            const response=await axios.get('https://dummyjson.com/products')
            setData(response.data.products);
            console.log(response.status,response.data.products,'>>>>>>')
        }catch(error){
            console.log('error',error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='bg-gray-500'>
        <div className='max-w-[1200px] mx-auto bg-black h-[100%] pt-[6rem] text-white '>
            <p className='text-white text-center'> Let's Learn Aip Request Using Axios</p>
            {data?.map((item: any) => (
          <p key={item.id} className='text-white'>
            {item.title}
          </p>
        ))}
        </div>
      
    </div>
  )
}

export default UsingAxios;
