import { useState } from "react";
import { useProductsQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { FaSpinner } from "react-icons/fa";
import ProductsSidebar from "./components/ProductsSidebar";
import ProductsPart from "./components/ProductsPart";
import { Input } from "antd";
import DataPagination from "../../common/DataPagination";

const ProductsPage = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [brands, setBrands] = useState<Array<string>>([]);
  const [colors, setColors] = useState<Array<string>>([]);
  const [sizes, setSizes] = useState<Array<string>>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { slug } = useParams();
  const {
    data: products,
    isLoading: productsLoading,
    isFetching: productsFetching,
  } = useProductsQuery({
    page: page,
    limit: limit,
    category: slug!,
    search: search,
    brand: brands?.length > 0 ? brands?.join(",") : undefined,
    color: colors?.length > 0 ? colors?.join(",") : undefined,
    size: sizes?.length > 0 ? sizes?.join(",") : undefined,
    min_price: minPrice,
    max_price: maxPrice,
    rating: rating,
  });

  const handlePageChange = (page: number, size: number) => {
    setPage(page);
    setLimit(size);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSearch = (value: string) => {
    if (value.length < 1) {
      setSearch(undefined);
    } else {
      setSearch(value);
    }
  };

  return (
    <Container>
      {productsLoading ? (
        <div className="h-svh w-full flex justify-center items-center">
          <FaSpinner className="animate-spin size-8 text-primary" />
        </div>
      ) : (
        <div className="lg:py-14 md:py-12 py-10 mt-16">
          <div className="grid grid-cols-7 gap-10">
            <div className="col-span-2">
              <ProductsSidebar
                summary={products?.summary}
                setBrands={setBrands}
                setColors={setColors}
                setSizes={setSizes}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setRating={setRating}
                maxPrice={maxPrice}
                minPrice={minPrice}
                colors={colors}
              />
            </div>
            <div className="col-span-5">
              <div className="space-y-5">
                <Input.Search
                  placeholder="Search product"
                  allowClear
                  onSearch={onSearch}
                  enterButton="Search"
                  size="large"
                  loading={productsFetching || productsLoading}
                />
                <ProductsPart
                  data={products?.results || []}
                  loading={productsFetching}
                />
                <DataPagination
                  total={products?.count}
                  page={page}
                  limit={limit}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductsPage;
