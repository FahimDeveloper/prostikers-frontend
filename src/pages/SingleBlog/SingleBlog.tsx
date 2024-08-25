import { useParams } from "react-router-dom";
import { usePostQuery } from "../../redux/features/post/postApi";
import Container from "../../components/Container";

const SingleBlog = () => {
  const { id } = useParams();
  const { data } = usePostQuery(id);
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4) 60%, transparent 100%), url(${data?.results.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="flex flex-col justify-center lg:h-96 md:h-72 sm:h-64 h-56">
            <h3 className="font-semibold capitalize lg:text-5xl sm:text-4xl text-3xl lg:leading-[58px] sm:leading-10 leading-7 text-white">
              Blog Details
            </h3>
          </div>
        </Container>
      </div>
      <Container>
        <div className="lg:py-16 md:py-12 py-10 sm:space-y-8 space-y-5">
          <h2 className="font-semibold lg:text-[56px] sm:text-[45px] text-3xl lg:leading-[67px] sm:leading-[50px]">
            {data?.results.title}
          </h2>
          <p className="text-lg text-[#929292]">{data?.results.description}</p>
          <article
            dangerouslySetInnerHTML={{ __html: data?.results.content }}
          />
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
