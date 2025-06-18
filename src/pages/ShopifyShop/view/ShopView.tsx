import Container from "../../../components/Container";
import CategoryGallery from "../components/CategoryGallery";
import CategoryShopNow from "../components/CategoryShopNow";
import CategorySlider from "../components/CategorySlider";
import ExtraFeatures from "../components/ExtraFeatures";
import FeaturedProducts from "../components/FeaturedProducts";
import ShopBanner from "../components/ShopBanner";

const ShopView = () => {
  return (
    <Container>
      <div className="space-y-14">
        <ShopBanner />
        <CategorySlider />
        <CategoryShopNow />
        <CategoryGallery />
        <FeaturedProducts />
        <ExtraFeatures />
      </div>
    </Container>
  );
};

export default ShopView;
