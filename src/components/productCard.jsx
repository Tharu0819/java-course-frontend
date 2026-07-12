export default function ProductCard(props){

    console.log(props.name)

    return(
        <div className ="bg-red-600 border w-56"> 
            <h1 className="text-white">{props.name}</h1>
            <img src={props.image} alt={"picture of a "+props.name} />
            <p>LKR {props.price}/-</p>
            <button>Buy Now</button>
          </div>
    )
}