import { useState } from "react";
import { useProductsQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { FaSpinner } from "react-icons/fa";
import ProductsSidebar from "./components/ProductsSidebar";

const ProductsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(18);
  const { slug } = useParams();
  const {
    data: products,
    isLoading: productsLoading,
    isFetching: productsFetching,
  } = useProductsQuery({
    params: {
      page: page,
      limit: limit,
    },
    category_slug: slug!,
  });

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
  };

  return (
    <Container>
      {productsLoading || productsFetching ? (
        <div className="h-svh w-full flex justify-center items-center">
          <FaSpinner className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="lg:py-14 md:py-12 py-10 mt-16">
          <div className="grid grid-cols-7">
            <div className="col-span-2">
              <ProductsSidebar />
            </div>
            <div className="col-span-5">
              <ProductsSidebar />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductsPage;
