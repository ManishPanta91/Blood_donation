import React from 'react'
import { useAddPostMutation } from '../APP/posts/postApi';

const AddPost = () => {

    const [addPost,{isLoading,isSuccess,isError}] = useAddPostMutation();
  return (
        <form  className=" mt-50 p-4 space-y-4 max-w-md mx-auto shadow-md rounded-xl bg-white">
      <h2 className="text-xl font-bold">Create a Post</h2>
      
      <div>
        <label className="block mb-1 font-medium">Title:</label>
        <input
          type="text"
          name="title"
         
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Body:</label>
        <textarea
          name="body"
         type="text"
          className="w-full border rounded px-3 py-2 h-32"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}

export default AddPost