/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({ children }: { children: any }) => {
  return (
    <div className="2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] mx-auto sm:px-10 px-6">
      {children}
    </div>
  );
};

export default Container;
