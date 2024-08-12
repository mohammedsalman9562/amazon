
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import HeaderBottom from "@/components/header/HeaderBottom";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Products from "@/components/product";
import { ProductProps } from "@/type";

interface Props{
  productData: ProductProps;
}

export default function Home({productData} : Props) {
  console.log(productData);
  return (
    <main>

      <div>
      <Banner/>
      <Products productData={productData}/>
      </div>
      
    </main>
  )
}

export const getServerSideProps = async() => {
  const res= await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return{props: {productData}};
}