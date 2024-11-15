import React, { useEffect, useState } from 'react'

function About() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/deshmukhdinesh722')
        .then(res=>res.json())
        .then(data=>{
setdata(data)
        })
    },[])
    return (
        <div>

<h1> 
    {data.followers}
    <img src={data.avatar_url} alt="" />
</h1>
        </div>
    )
}

export default About
