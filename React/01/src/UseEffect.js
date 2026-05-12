import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [Clicked,setClicked] = useState();
    const [count,setcount] = useState(0);

    useEffect(()=>{ // It is acted when any new effect is received or any new event is received 
        alert("We are in Useeffect.");
    },[Clicked,count]) // We can specify the event or leave it blank for all the event listening.
    return(
        <div>
            <button onClick={()=> setClicked("First")}>First</button>
            <br/>
            <hr/>
            <button onClick={()=> setClicked("Second")}>Second</button>
            <br/>
            <hr/>
            <button onClick={()=> setClicked("Third")}>Third</button>
            <br/>
            <hr/>
            <h1>{Clicked}</h1>
            <button onClick={() => setcount(count+1)}>Increment</button>
            <h1>{count}</h1>
        </div>
    )

}

export default UseEffect;