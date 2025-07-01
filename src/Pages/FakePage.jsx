import React from "react";
import { useGetsfakebyidQuery } from "../APP/posts/fakeApi";
import { useParams } from "react-router-dom";

const FakePage = () => {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading } = useGetsfakebyidQuery(id);
  console.log("data of fakebyid", data);
 

  return (
    <div>
      {isLoading && (
        <p className="mt-[120px] max-w-5xl text-3xl font-extralight mx-auto">
          Loading...
        </p>
      )}

      {!isLoading && (
        <div className="mt-[120px] max-w-5xl mx-auto p-10 bg-amber-100">
          <h2 className="text-3xl font-bold">Title: {data?.product?.title}</h2>
          <p>{data?.product?.brand}</p>
        </div>
      )}

      <img className=" flex items-center  justify-center h-[200px] w-[200px]" src={data?.product?.image} alt="image" />
    </div>
  );
};

export default FakePage;
