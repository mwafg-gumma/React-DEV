import React from 'react'
import { Link } from 'react-router-dom';

const ViewAll = () => {
    return (
    <>
                <section className="m-auto px-6  max-w-lg ">
            <div className="text-center ">
                <Link to= '/Full' className=" inline-block bg-black hover:bg-gray-700 py-3 px-20 w-full rounded-xl my-7 text-white">
                    View All
                </Link>
            </div>
        </section>
    </>
    )
}

export default ViewAll
