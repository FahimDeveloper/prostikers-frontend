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
      <Container>
        <div className="lg:py-14 md:py-12 py-10 space-y-10">
          <div className="space-y-4 text-center">
            <h4 className="capitalize text-primary lg:text-2xl text-xl font-semibold leading-7">
              Media
            </h4>
            <h2 className="lg:text-[56px] md:text-[45px] text-3xl font-semibold lg:leading-[67px] md:leading-[50px]">
              Latest updates from Prostrikers
            </h2>
            <p className="text-[#929292] md:text-lg lg:leading-7 md:leading-6 leading-5 md:w-[700px] w-full mx-auto">
              Welcome to the Prostrikers Blog! Stay up to date with the latest
              topics, news, and updates from our world-class facilities. Be the
              first to know about new training programs, expert tips, and
              upcoming events. For even more content, follow us on Facebook,
              Instagram, and YouTube to keep ahead of the game and stay
              connected with all things Prostrikers.
            </p>
          </div>

          {data?.results?.length ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {data?.results.map((blog, index) => {
                return <BlogCard key={index} blog={blog} />;
              })}
            </div>
          ) : (
            <div className="h-40 flex justify-center items-center">
              <p className="text-2xl font-semibold text-secondary">
                No Blogs Available
              </p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Blogs;
