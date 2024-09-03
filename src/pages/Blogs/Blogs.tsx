import { usePostsQuery } from "../../redux/features/post/postApi";
import banner from "../../assets/images/academy/academy-banner.webp";
import BannerSection from "../../common/BannerSection";
import BlogCard from "../../common/card/BlogCard";
import Container from "../../components/Container";

const Blogs = () => {
  const { data } = usePostsQuery({ limit: 9 });
  return (
    <>
      <BannerSection title="Blogs" image={banner} />
      {data?.results?.length ? (
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

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {data?.results.map((blog, index) => {
                return <BlogCard key={index} blog={blog} />;
              })}
            </div>
          </div>
        </Container>
      ) : (
        <div className="h-40 flex justify-center items-center">
          <p className="text-2xl font-semibold text-secondary">
            Blogs Not Found
          </p>
        </div>
      )}
    </>
  );
};

export default Blogs;
