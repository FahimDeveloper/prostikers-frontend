import BlogCard from "../../../common/card/BlogCard";
import Container from "../../../components/Container";
import image1 from "../../../assets/images/gallery/soccer/soccer-gallery-1.webp";
import image2 from "../../../assets/images/gallery/soccer/soccer-gallery-2.webp";
import image3 from "../../../assets/images/gallery/soccer/soccer-gallery-3.webp";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogData = [
    {
      title: "Sell to Businesses",
      link: "/coming-soon",
      image: image1,
      description:
        "Launch a B2B business and collect one-time or recurring payments from customers.",
    },
    {
      title: "Validate Your Idea",
      link: "/coming-soon",
      image: image2,
      description:
        "Test your product idea by launching payments with little to no code.",
    },
    {
      title: "Sell to Consumer",
      link: "/coming-soon",
      image: image3,
      description:
        "Launch a B2C business with a prebuilt payment page that’s optimized for conversion.",
    },
  ];
  return (
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
            {blogData?.map((blog, index) => {
              return <BlogCard key={index} blog={blog} />;
            })}
          </div>
          <div className="text-center">
            <Link to="/coming-soon" className="text-black">
              <button className="btn bg-white border border-solid hover:border-gray-300 hover:bg-white border-gray-200 text-base px-10 rounded-full">
                View More Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
