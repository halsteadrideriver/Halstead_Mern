// import React, { createContext, useContext } from 'react'
// import { greetContext,greet2Context } from './A'   // for regular and shorten method 1 with context api
import React, { useContext } from 'react'
import { greetContext} from './A' // for shotern method 2 with context api

//Without context api
// export default function C(props) {
//     console.log(props.greet);
//   return (
//     <div>

//     </div>
//   )
// }

// With context api

// export default function C() {
    
//   return (
//     <div>
//         <greetContext.Consumer>
//             {
//                 (val)=>{
//                     return(
//                         <greet2Context.Consumer>
//                             {
//                                 (val2)=>{
//                                     return <h1>Greet from A : {val} {val2}</h1>
//                                 }
//                             }
//                         </greet2Context.Consumer>
//                     )
//                 }
//             }
//         </greetContext.Consumer>

//     </div>
//   )
// }

// Shorten method with context api.

// export default function C() {
//     const useCon = createContext(greetContext)
//     const useCon2 = createContext(greet2Context)
//   return (
//     <div>
//         <h1> Greet from  shortened A : {useCon} {useCon2}</h1>

//     </div>
//   )
// }

// Shorten method 2 with context api.
export default function C() {
    const useCon = useContext(greetContext)
    console.log(useCon)
  return (
    <div>
        <h1> Greet from  shortened 2 A : {useCon.greet} {useCon.greet2}</h1>

    </div>
  )
}

