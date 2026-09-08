import React from 'react'
import C from './C'

// Without context api
// export default function B(props) {
    
//   return (
//     <div>
//         <C greet={props.greet}/>

//     </div>
//   )
// }

// With context api.

export default function B() {
    
  return (
    <div>
        <C />

    </div>
  )
}