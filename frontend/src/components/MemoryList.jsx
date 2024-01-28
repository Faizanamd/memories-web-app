import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

import GridLoader from "react-spinners/GridLoader";




function MemoryList({ setPostId, loading, memoList, handleDelete, hanldeFindPost }) {

    return (
        <div className='mr-8 grid grid-cols-3 gap-5 mb-8'>
            {loading ? (
                <GridLoader color="#36d7b7" />
            ) : (
                memoList.map((post, index) => (

                    <div className='bg-cyan-700 rounded-xl flex flex-col font-mono transition duration-700 ease-in-out hover:scale-105 shadow-2xl text-black' key={post._id}>
                        <div className='w-full rounded-t-xl h-40 bg-center bg-cover bg-no-repeat opacity-90 relative' style={{ backgroundImage: `url(http://localhost:8000/uploads/${post.image})`, filter: "grayscale(50%)" }}>
                            <h2 className="absolute text-xl font-semibold left-4 z-40 text-white">{post.creator}</h2>
                            <p className="absolute text-sm top-5 left-4 mt-1 z-50 text-white" >
                                {post.timestamp}
                            </p>
                            <div className="absolute right-2 top-2 flex space-x-3">
                                <LiaEdit onClick={(e) => hanldeFindPost(e, post._id)} className="bgglossy   hover:scale-110 transition duration-500 " size={28} color="white" />
                                <RiDeleteBin6Line onClick={(e) => handleDelete(e, post._id)} className="bgglossy hover:scale-110 transition duration-500 " size={28} color="white" />

                            </div>
                        </div>
                        <div className='w-full '>
                            <ul className="flex text-sm mt-1 ml-3 space-x-3 text-gray-400 flex-wrap">
                                {post.tags.split(',').map((tag, index) => (
                                    <li key={index}>#{tag.trim()}</li>
                                ))}
                            </ul>
                            <h2 className="text-lg font-semibold mx-3 limit-1-lines">{post.title}</h2>
                            <p className="text-sm mx-3 text-justify mb-3 limit-4-lines">{post.message}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default MemoryList;
