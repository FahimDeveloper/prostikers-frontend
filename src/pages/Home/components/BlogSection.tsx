import BlogCard from "../../../common/card/BlogCard";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import { usePostsQuery } from "../../../redux/features/post/postApi";

const BlogSection = () => {
  const { data } = usePostsQuery({
    limit: 3,
  });
  return (
    <>
      {data?.results?.length != undefined && data?.results?.length > 0 && (
        <Container>
          <div className="lg:py-14 md:py-12 py-10 space-y-10">
            <div className="space-y-4 text-center">
              <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
                Media
              </h4>
              <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
                Latest from out ProStrikers
              </h2>
              <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
                Join an esteemed network of over 50,000 professionals who trust
                ProStrikers for their training needs. Our expert-recommended
                programs and facilities are designed to help you achieve peak
                performance.
              </p>
            </div>
            <div className="space-y-10">
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {data?.results.map((blog, index) => {
                  return <BlogCard key={index} blog={blog} />;
                })}
              </div>
              <div className="text-center">
                <Link to="/blogs" className="text-black">
                  <button className="btn bg-white border border-solid hover:border-gray-300 hover:bg-white border-gray-200 text-base px-10 rounded-full">
                    View More Blogs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default BlogSection;
