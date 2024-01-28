import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function MemoryForm({handleSubmit,  updatePost,  handleClear, creator, setCreator, title, setTitle, message, setMessage, tags, setTags, image, setImage }) {
 

    
    return (
        <div className='bg-cyan-800 shadow-2xl  w-full flex flex-col justify-center items-center space-y-3 pb-3 rounded-2xl  '>
            <h4 className='text-2xl mt-3 font-semibold '>Create a memory</h4>
            <form action="" encType='multipart/form-data' className='flex flex-col w-full items-center space-y-3' >
                <input value={creator} onChange={(e) => setCreator(e.target.value)} className='  w-[90%] px-3 py-2 text-lg rounded-lg outline-none shadow-xl border-[1px] border-cyan-100 text-black  ' type="text" placeholder='Creator' />
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='  w-[90%] px-3 py-2 text-lg rounded-lg outline-none shadow-xl border-[1px] border-cyan-100 text-black ' type="text" placeholder='title' />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} col={2} className='  w-[90%] px-3 py-2 text-lg rounded-lg outline-none shadow-xl border-[1px] border-cyan-100 text-black ' type="text" placeholder='Message' />
                <input value={tags} onChange={(e) => setTags(e.target.value)} className='  w-[90%] px-3 py-2 text-lg rounded-lg outline-none shadow-xl border-[1px] border-cyan-100 text-black ' type="text" placeholder='tags with comma seperated' />
                <input onChange={(e) => setImage(e.target.files[0])} className='  w-[90%] px-3 py-2 text-lg rounded-lg outline-none shadow-xl border-[1px] border-cyan-100 text-black bg-white ' type="file" />


                <button onClick={(e) => handleSubmit(e)} className='  w-[90%] bg-blue-600 text-xl text-white px-3 py-2 border-[1px] border-cyan-100  rounded-xl shadow-lg  hover:bg-white hover:text-black hover:border-[1px] hover:border-cyan-400 duration-1000 hover:font-semibold' type='button'>{!updatePost ? "Submit":"Update"}</button>
                {updatePost? (null):( <button onClick={(e) => handleClear(e)} className=' w-[90%] bg-red-600 text-xl text-white px-3 py-2 border-[1px] border-red-100   rounded-xl shadow-lg  hover:bg-white  hover:border-[1px] hover:border-cyan-400 hover:text-red-600 duration-1000 hover:font-semibold mt-3 mb-3 ' type='button'>Clear</button>
)}
               
            </form>
        </div>
    )
}

export default MemoryForm
