import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

    const Full = ({item}) => {
        const [view,setView] = useState (false)
        let description = item.description;
        if(!view) {
            description = description.substring(0,80) + '...'
        }
        return (
            <>
                <div className="bg-white shadow-md rounded-md  mx-2 my-3">
                    <span className=" inline-block py-3 text-2xl font-semibold text-gray-900 mb-2 px-3 ">
                        {item.title}
                    </span>
                    <h1 className="text-xl px-3 font-bold text-gray-700 mb-3">
                        {item.type}
                    </h1>
                    <p className="text-lg text-gray-600 mb-3 px-3">
                        {description}
                    </p>
                    <Link to="" className='text-red-600 px-3 inline-block mb-3' onClick={(e) => {
                    e.preventDefault()
                    setView ((prev) => !prev)
                    }} >
                        {view ? "Read Less" :"Read More"}
                    </Link>
                    <p className="text-lg text-indigo-900 mb-3 px-3">
                        {item.days} /days
                    </p>
                    <div className="border border-gray-300 mb-3"></div>
                    <Link to="#"className="text-white text-lg bg-slate-600 hover:bg-black px-4 py-2 rounded-md inline-block text-center mb-3 mx-2">
                        Read More
                    </Link>
                    </div>
        </>
        )
    }

export default Full
