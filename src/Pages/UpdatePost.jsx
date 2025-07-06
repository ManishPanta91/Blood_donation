import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetsfakebyidQuery,
  useUpdateproductMutation,
} from "../APP/posts/fakeApi";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const updatePostSchema = Yup.object({
  title: Yup.string().required("Enter a title"),
  price: Yup.number().required("Enter a price"),
});

const UpdatePost = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetsfakebyidQuery(id);
  console.log(" data in upadated products", data);

  const [updateProduct, { isLoading: isupdatingProduct }] =
    useUpdateproductMutation();

  const { values, errors, touched, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        id: data?.product?.id || "",
        title: data?.product?.title || "",
        price: data?.product?.price?.toString() || "",
      },
      enableReinitialize: true,

      onSubmit: async (val) => {
        try {
          const response = await updateProduct(val).unwrap();
          console.log("Product update successfully", response);
          toast.success("Post added Suceessfully ");
        } catch (err) {
          console.log("Error while updating", err);
          toast.error("Error while updating product");
        }
      },
      validationSchema: updatePostSchema,
    });

  return (
    <div className="mt-[120px] flex flex-col items-center justify-center  w-full">
      UpdatePost {id}
      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-4 bg-white p-4 rounded-xl shadow-md w-full max-w-md"
      >
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={values.title}
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <textarea
          name="price"
          onChange={handleChange}
          value={values.price}
          placeholder="Price"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          rows="4"
        />
        <div className="flex gap-4">
          <button
            disabled={isupdatingProduct}
            type="submit"
            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            {isupdatingProduct ? "Updating" : "Update-product"}
          </button>
          <button disabled={isupdatingProduct}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
