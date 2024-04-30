/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="md:space-y-5 space-y-4 w-full">
      <div className="p-2 rounded-md border border-solid border-[#E5E5E5]">
        <img
          src={blog.image}
          className="h-60 w-full object-cover"
          alt="blog image"
          loading="lazy"
        />
      </div>
      <div className="md:space-y-3 space-y-2">
        <h3 className="font-semibold md:text-[32px] md:leading-[38px] text-2xl text-[#07133D]">
          {blog.title}
        </h3>
        <p className="md:text-lg text-md text-[#737373]">
          {blog.description.slice(0, 70)}..
        </p>
      </div>
      <Link
        to={blog.link}
        className="text-primary text-base flex items-center gap-1 font-medium no-underline"
      >
        Read More <FiArrowRight />
      </Link>
    </div>
  );
};

export default BlogCard;
