import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
    <>

    <section className="px-7 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3">
            {/* card 1 */}
            <div className="bg-slate-200 shadow-md rounded-md mx-3">
                <h1 className='font-bold px-3 py-3 '>
                    FRONT-END
                    </h1>
                    <p className="mt-2 px-3 mb-2 text-whit text-lg md:text-1xl text-gray-800">
                        We Building web APP InterFace Layout and Interactive  Using HTML,CSS,JAVASCRIPT
                    </p>
                    <Link to="/Full" className='bg-slate-600 inline-block px-3 py-2 mx-3 mt-2 mb-3 rounded-md text-white hover:bg-sky-900 ' >
                        Read More
                    </Link>
            </div>
            {/* card 2 */}
            <div className="bg-white shadow-md rounded-md mx-3">
                <h1 className='font-bold px-3 py-3 '>
                    BACK-END
                    </h1>
                    <p className="mt-2 px-3 mb-2 text-whit text-lg md:text-1xl text-black">
                        That is Work Behind The Screen it handles data,Server,and Logic Using Language Like Node.js, Python & PHP
                    </p>
                    <Link to="/Full" className='bg-black inline-block px-3 py-2 mx-3 mt-2 mb-3 rounded-md text-white hover:bg-gray-700' >
                        Read More
                    </Link>
            </div>
    
        </div>
    </section>

    </>
    )
}

export default Card
