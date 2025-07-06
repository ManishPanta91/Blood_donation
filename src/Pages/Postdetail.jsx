import React from "react";
import { useParams } from "react-router-dom";
import { useGetsPostsbyidQuery } from "../APP/posts/postApi";

const Postdetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetsPostsbyidQuery(id);
  console.log("data of Postdetailbyid", data);

  return (
    <div>
      {isLoading && (
        <p className="mt-[120px] max-w-5xl text-3xl font-extralight mx-auto">
          Loading...
        </p>
      )}

      {!isLoading && (
        <div className="mt-[120px] max-w-5xl mx-auto p-10 bg-amber-100">
          <h2 className="text-3xl font-bold">Title: {data?.title}</h2>
          <p>{data?.body}</p>
         
        </div>
      )}
    </div>
  );
};

export default Postdetail;
