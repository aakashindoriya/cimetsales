import { useLoaderData } from "react-router-dom";
import { BlogsApiResponse } from "../types/apiRespose";

const SingleBlog = () => {
  const data = useLoaderData() as BlogsApiResponse;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {data.title}
      </h1>
      <div className="border-t border-gray-300 my-4"></div>
      <p className="text-lg text-gray-600 leading-relaxed">
        {data.body}
      </p>
    </div>
  );
};

export default SingleBlog;
