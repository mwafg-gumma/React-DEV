import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Front = ({language}) => {

    const [view,setView] = useState (false)

    let description = language.description ;

    if(!view) {
        description = description.substring(0,85) + "..."
    }


    return (
        <>
                <div className="bg-white shadow-md rounded-md p-5 min-h-[300px] flex flex-col justify-between">
                    <h2 className="text-lg -ml-60  text-gray-800 mb-3">
                        {language.title}
                        </h2>
                        <h1 className="text-xl font-bold text-gray-900 mb-3 -ml-28  ">
                            {language.type}
                        </h1>
                        <p className="text-lg text-gray-600 mb-3">
                            {description}
                        </p>
                        <Link href="#" className="inline-block text-red-600 text-lg mb-2 -ml-64 " onClick={() => setView ((show) => !show)}>
                            {view ? "Read Less" : "Read More"}
                        </Link>
                        <h3 className="text-xl text-indigo-900 mb-3 -ml-44">
                            {language.days}/days
                        </h3>
                        <div className="border border-gray-300 mb-3"></div>
                        <Link to="#"
                            className="text-white text-lg bg-slate-600 hover:bg-black px-4 py-2 rounded-md inline-block text-center"
                        >
                            Read More
                        </Link>
                    </div>

    </>
    )
}

export default Front
