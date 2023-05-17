import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ data }) {
  return (
    <>
      <Banner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Take Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike running Shoes.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await fetchDataFromApi("/api/products?populate=*");
  return {
    props: { data },
  };
}
