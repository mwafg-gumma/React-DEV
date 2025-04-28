import React from 'react';
import word from '../../assets/images/word.png'; 
import languages from '../../languages.json'
import { Link } from 'react-router-dom'
import Full from './Full'

const FullStack = () => {
    const recent = languages.slice(0,10)
    return (
        <>
            <section className="px-2 mt-3">
                <div className="container-md md:container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-7 mt-10">
                        {/* description */}
                        <div className="px-3 mt-10">
                            <div className="text-center">
                                <h1 className="text-2xl font-bold text-gray-800 mt-10 mb-5">
                                    Mastering Frontend, Backend, and Everything In Between
                                </h1>
                                <h3 className="text-center text-2xl text-gray-700 ">
                                    Why Become a Full-Stack Developer?
                                </h3>
                                <div className="flex flex-col text-center my-5 px-7">
                                    <p className="text-gl text-gray-500 py-3">
                                        ✅ Frontend Development – Building interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js.
                                    </p>
                                    <p className="text-gl text-gray-500 py-3">
                                        ✅ Backend Development – Handling server-side logic  with  languages  like Node.js, Python (Django/Flask), Ruby on Rails, or Java 
                                    </p>
                                    <p className="text-gl text-gray-500 py-3">
                                        ✅ Databases – Managing data storage with SQL <br /> (PostgreSQL, MySQL) or NoSQL (MongoDB, Firebase).
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* image */}
                        <div className="px-3">
                            <img src={word} className='hidden md:block' alt="Full-Stack" />
                        </div>
                    </div>
                </div>
            </section>
            {/* FullStack List */}
            <section className="mt-10 mx-auto">
                <div className="py-10 px-10 bg-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 ">
                    {recent.map((item) => (
                    <Full key={item.id} item={item} />
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FullStack;