import React, { useEffect,useState }  from "react";

const MultipleReturn = () => {
    const [Users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        async function fetchUsers(){
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);             
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchUsers();
    },[])

    if(isLoading){
        return <p>...Loading...</p>
    }
    if(error){
        return <p>Error:{error.message}</p>
    }

    return(
        <div>
            <h1>User Lists</h1>
            <ul>
                {
                    Users.map(users =>{
                        return <li key={users.id}>{users.login}</li>
                    })
                }
            </ul>

        </div>
    )

}

export default MultipleReturn;