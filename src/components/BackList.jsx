import { Link } from 'react-router-dom';
import Tools from '../components/Tools.json'; 
import Back from '../components/Back';
import Backend from '../assets/images/Backend.png'


const BackList = () => {
    const recent = Tools.slice(0, 3);  
    return (
        <>
            <div className=" px-4 py-5">
                <div className="container-xl  m-auto">
                    <h1 className="text-3xl font-bold pt-10  text-gray-800 text-center ">
                    Backend Development The Engine Behind <br />  the Scenes
                    </h1>
                    <div className="px-10 mb-7  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto p-3">
                            {/* description */}
                            <div className="mx-2 mt-10 px-3">
                                <h2 className="text-3xl font-bold text-gray-800 py-3">
                                What is Backend Development?
                                </h2>
                                <ul className='mx-7'>
                                    <li>
                                        <Link to="" className='text-gray-600 text-lg inline-block py-2'>✅Server : The backbone that processes requests and delivers responses</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className='text-gray-600 text-lg inline-block py-2'>✅Database: Stores and retrieves data (e.g., MySQL, MongoDB, PostgreSQL)</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className='text-gray-600 text-lg inline-block py-2'>✅Business Logic: The core algorithms and workflows that drive functionality.</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Image */}
                            <div className="mx-2 py-2">
                                <img src={Backend} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {recent.map((item) => (
                            <Back item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BackList;
