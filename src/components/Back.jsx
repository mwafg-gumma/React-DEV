import { Link } from "react-router-dom";
import { useState } from "react";

const Back = ({item}) => {
const [view,setView] = useState (false)
let description = item.description
if(!view) {
    description = description.substring(0,90) + "..."
}

    return (
                    <>
                        <div className="bg-white shadow-md rounded-md p-5 min-h-[300px] flex flex-col justify-between">
                        <span className="text-2xl font-semibold text-gray-800 mb-2">
                            {item.title}
                        </span>
                        <h1 className="text-xl font-bold text-gray-900 mb-3">
                            {item.type}
                        </h1>
                        <p className="text-lg text-gray-600 mb-3">
                            {description}
                        </p>
                        <Link href="#" className="inline-block text-red-600 text-xl mb-2" onClick={() => setView ((show) => !show)}>
                            {view ? "Read Less" : "Read More"}
                        </Link>
                        <p className="text-lg text-indigo-900 mb-3">
                            {item.days}/days
                        </p>
                        <div className="border border-gray-300 mb-3"></div>
                        <Link to="#"
                            className="text-white text-lg bg-slate-600 hover:bg-black px-4 py-2 rounded-md inline-block text-center"
                        >
                            Read More
                        </Link>
                    </div>
        </>
    );
};

export default Back;


