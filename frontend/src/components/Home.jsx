

import React, { useState, useEffect } from 'react'
import MemoryForm from './MemoryForm'
import MemoryList from './MemoryList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Home() {
    const [updatePost, setUpdatePost] = useState(false);
    const [loading, setloading] = useState(true);
    const [memoList, setMemoList] = useState([]);
    const [refreshPage, setRefreshPage] = useState(true);
    // taken from memoryform
    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [postId, setPostId] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/posts')
            .then(response => {
                // console.log('Data fetched successfully:', response.data);
                setMemoList(response.data);
                setloading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setloading(true);
            });
        setRefreshPage(false)
    }, [refreshPage]);



    async function handleDelete(e, id) {
        e.preventDefault();
        setloading(true);
        try {
            const result = await axios.delete(`http://localhost:8000/posts/delete/${id}`);
            console.log(result);
            setRefreshPage(prevState => !prevState);
            toast.success("Your memory got deleted successfully")
        } catch (error) {
            console.error("Error deleting memory:", error);
        }
    }
    function handleClear(e) {
        e.preventDefault();
        console.log('handleClear called');
        setloading(true);
        if (setRefreshPage) {
            setRefreshPage(prevState => !prevState);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitting form...');
        const memoryData = new FormData();
        memoryData.append('creator', creator);
        memoryData.append('title', title);
        memoryData.append('message', message);
        memoryData.append('tags', tags);
        memoryData.append('image', image);
        console.log("before try", memoryData)
        try {
            if (!updatePost) {
                console.log("post add new post");
                console.log('memory dat', memoryData);
                await axios.post('http://localhost:8000/posts', memoryData);
                toast.success("New memory created successfully");
            } else {
                const updatedObject = {
                    creator, title, message, tags, image
                }
                console.log("updated", updatedObject);

                await axios.put(`http://localhost:8000/posts/update/${postId}`, updatedObject);
                toast.success("memo got updated successfully..")
            }
          
            handleClear(e);
            setRefreshPage(true);
            setCreator('');
            setTitle('');
            setMessage('');
            setTags('');
            setImage('');
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong! Please try again");
        }
        setUpdatePost(false);
    }
    async function hanldeFindPost(e, id) {
        e.preventDefault();
        console.log(id);
        const result = (await axios.get(`http://localhost:8000/posts/post/${id}`)).data
        console.log(result);
        setCreator(result.creator);
        setTitle(result.title);
        setMessage(result.message);
        setTags(result.tags);
        setImage(result.image);
        setUpdatePost(true);
        setPostId(id);
    }


    return (

        <div className='w-full min-h-[100vh] bg-cyan-800 flex flex-col items-center pt-12 px-[100px]'>
            <ToastContainer />

            <h1 className='bg-cyan-700 shadow-xl  px-12 py-3 text-2xl font-bold rounded-xl  w-full text-center mb-8 '>Some Good Memories by Good's One</h1>
            <div className=' w-full flex '>

                <div className='w-3/4  '>
                    <MemoryList setPostId={setPostId} updatePost={updatePost} setUpdatePost={setUpdatePost} loading={loading} memoList={memoList} handleDelete={handleDelete} hanldeFindPost={hanldeFindPost} />
                </div>
                <div className='w-1/4'>
                    <MemoryForm handleSubmit={handleSubmit} postId={postId} updatePost={updatePost} setUpdatePost={setUpdatePost} refreshPage={refreshPage} setRefreshPage={setRefreshPage} handleClear={handleClear} creator={creator} title={title} message={message} tags={tags} image={image} setCreator={setCreator} setTitle={setTitle} setMessage={setMessage} setTags={setTags} setImage={setImage} />

                </div>
            </div>

        </div>
    )
}

export default Home
