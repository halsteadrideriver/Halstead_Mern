import React from "react";
import './MobileList.css'
// components:
// export default function MobileList(){
//     const image = "https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/r/a/c/-original-imahjzf6gw6zwskp.jpeg?q=90";
//     const title = "Phone";
//     const price = 100;
//     return(
        
//         <div className="main">
//             <img className="image" src={image}/>
//             <div>
//             <h2>{title}</h2>
//             <p>${price}</p>
//             <button>Save to cart</button>
//             </div>


//         </div>
//     )
// }

// Components with props:
// Props: a mechanism used to pass data from a parent component to a //child component. They are essentially inputs that make components //dynamic and reusable.

export default function MobileList(props){
    return(
        <div className="main">
            <img className="image" src={props.image}></img>
            <div>
                <h2>{props.title}</h2>
                <p>$ {props.price}</p>
                <button>Save to Cart</button>
            </div>

        </div>
    )

}

