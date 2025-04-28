import React from 'react'
import languages from '../languages.json'
import Front from './Front'


const FrontList = () => {
    const recent =  languages.slice(0,3)
    return (
    <>
        <section className="mt-10 mx-auto py-20 text-center bg-slate-100 rounded-lg">
            <h1 className='font-bold text-sky-900 text-3xl mb-10  '>
                Front-End Development
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3">

            {   recent.map((language) => (
                < Front key={language.id} language={language} />
            ))}
            </div>
        </section>
    </>
    )
}

export default FrontList
