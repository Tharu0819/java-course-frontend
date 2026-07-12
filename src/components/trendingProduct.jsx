import ProductCard from "./productCard";

export default function TrendingProducts(){
    return(
        <div> 
        <h1>Trending Product</h1>

            <ProductCard name="Mack book air" price="150,000"image="https://picsum.photos/id/1/200/300"/>

            <ProductCard name="Apple I Phone" price="90,000"image="https://picsum.photos/id/1/200/300"/>

            <ProductCard name="Dell Laptop" price="250,000"image="https://picsum.photos/id/1/200/300"/>


        </div>
    )
}