import React, { createContext } from 'react'
import B from './B'

// Without context api.
// export default function A() {
//     const greet = "Hello";
//   return (
//     <div>
//         <B  greet={greet}/>

//     </div>
//   )
// }

// With context api.

// const greetContext = createContext();
// const greet2Context = createContext();
// export default function A() {
//     const greet = "Hello";
//     const greet2 = "Hello2";
//   return (
//     <div>
//         <greetContext.Provider value={greet}>
//         <greet2Context.Provider value={greet2}>
//         <B/>
//         </greet2Context.Provider>
//         </greetContext.Provider>
        

//     </div>
//   )
// }

// export {greetContext,greet2Context}

// Shorten method 2 with context api

const greetContext = createContext();
export default function A() {
    const greet = "Hello1";
    const greet2 = "Hello2";
  return (
    <div>
        <greetContext.Provider value={{greet,greet2}}>
        <B/>
        </greetContext.Provider>
        
    </div>
  )
}

export {greetContext}
