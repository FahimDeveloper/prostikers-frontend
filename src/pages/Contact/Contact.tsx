import Container from "../../components/Container";
import GetInForm from "./components/GetInForm";
import GetInMap from "./components/GetInMap";

const Contact = () => {
  return (
    <Container>
      <div className="lg:py-16 md:py-12 py-10 mt-16 lg:space-y-10 md:space-y-7 space-y-5">
        <h2 className="font-semibold lg:text-[64px] md:text-5xl text-3xl lg:leading-[74px] md:leading-[50px] leading-9 lg:w-[650px] w-full">
          Get in touch with our lovely team
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <GetInMap />
          <GetInForm />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
