import { useEffect, useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./Router/Router";
import Layout from "./Layour/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  // const [count, setCount] = useState(0)

  // const [name, setName] = useState("Ram")

  // useEffect(() => {
  //   console.log("Renders on every refresh")
  // }, [count])

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {

  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => {
  //     console.log(res.data)
  //     console.log(res.data[0].title)
  //     setPosts(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   },[])

  // },[count] )

  return (
    <>
      {/* <Home/> */}

      {/* <ParentUserDetails/> */}
      {/* 
 <div className='flex flex-col  items-center justify-center h-screen w-full'>
  <h2>{count}</h2>
 <button className='bg-green-300 px-4 py-2 cursor-pointer  ' onClick={()=> setCount(count+2)}>Click</button>


 <h2 className='mt-10'>{name}</h2>
 <button className='bg-red-300 px-4 py-2 cursor-pointer ' onClick={() => setName("Sita")}>Change Name to Sita</button>
 <button className='bg-blue-300 px-4 py-2 cursor-pointer mt-6' onClick={() => setName("Ram")}>Change Name to Ram</button>
 </div>

 <div>
  <ul>
    {posts.map(post => (
      <li className='' key={post.id}>{post.title}</li>
    ))}
  </ul>
//  </div> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnFocusLoss
      />
      <Layout />
    </>
  );
}

export default App;
