import {useEffect, useState} from "react";


const useApiCall =(url) => {
    console.log("Making api call")
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(url).then(response => response.json())
            .then(value => setTodos(value))

    }, [url])
    return [todos]

}
export default useApiCall;