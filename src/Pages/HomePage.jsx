import React from "react";

import Hero from "../Components/Body/Hero";
import Detail from "../Components/Body/Detail";
import { useGetsPostsQuery } from "../APP/posts/postApi";
import { useNavigate } from "react-router-dom";
import { useGetsfakeQuery } from "../APP/posts/fakeApi";
const HomePage = () => {
  const { data, isloading, isError, isFetching } = useGetsfakeQuery();
  console.log("fakeapi data:", data);
  console.log("fake api response message", data?.status);

  const nav = useNavigate();

  return (
    <div className="">
      <Hero />
      <Detail />

      {data?.products?.map((product) => (
        <div
          onClick={() => nav(`details/${product.id}`)}
          className=" max-w-7xl mx-auto flex space-x-6 bg-green-300 p-6 my-8"
          key={product.id}
        >
          <p>{product.price}</p>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
