import './App.css'
function App() {
    let a = 3;
    return(
        // the JSX is the wrapper .
            <div>  {/* this is wrapping the HTML into JSX*/}
            {a+2} {/*this is how we ccan write Javascript in JSX.*/}
        <h1 className='main'> Hii Buddy </h1>
        <p style={{backgroundColor : "red", color:"white"}}> This is react class</p>
        <p> This is the JSX format .</p>
        <p> The things witten under the return </p>
            </div>

    )
}

export default App;