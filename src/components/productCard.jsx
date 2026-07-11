export default function ProductCard(props){

    console.log(props.name)

    return(
        <div>
            <h1>props.name</h1>
            <img src="https://picsum.photos/id/1/200/300" alt="random Image" />
            <p>LKR props.price/-</p>
            <button>Buy Now</button>
          </div>
    )
}