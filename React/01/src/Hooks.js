import React, { useState }  from "react";
import datas from './Datas.json'

// Hooks : 
const Hooks = () => {
    // useState Eg1:
    // console.log(useState()); // The useState Output is an array of two . Its first index is element and second is the function 
    // const [count,setCount] = useState(0);
    // console.log(count);
    // console.log(setCount);

    // const plus1 = () => {
    //     setCount(count+1)
    // }

    // const minus1 = () =>{
    //     setCount(count-1)
    // }
    // return(
    //     <div>
    //     <h1>{count}</h1>
    //     <button onClick={plus1}>+</button>
    //     <button onClick={minus1}>-</button>
    //     </div>
    // )

    // useState Eg2:
    const [nData,setnData] = useState(datas);
    //console.log(datas[2].id);
    const handleremove = (itemID) => {
        console.log(itemID)
        setnData(nData.filter(item => item.id !== itemID)) // creates a shallow array based on the logic included in the function.
    }
    const handleupdate = (itemID) => {
        setnData(nData.map(items =>{
            if(items.id === itemID)
            {
                return {name : "newName"}
            }
            else{
                return items;

            }
    }))
    }
    return(
        <div>
            <ul>
                {
                    nData.map(items =>
                        <li key={items.id}>
                            {console.log(items.id)}

                            {items.name}
                            <br/>
                            <button onClick={() => handleupdate(items.id)}>Update</button>
                            <button onClick={() => handleremove(items.id)}>Remove</button>

                        </li>
                    )
                }
            </ul>

            <button onClick={() => setnData([])}>ClearAll</button>

        </div>
    )


}

export default Hooks