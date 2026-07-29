import { useState, useEffect } from "react"

const Count = () => {

    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        const handleClick =() => {
        setCount(count + 1)
        console.log(count)
    }
    handleClick()

    }, []) 
    // [] you need this empty array so it runs one time

    

return(

    <div>
        <h1> Count.jsx</h1>
        <p> {count}</p>
        {/* <button onClick={handleClick}> +1</button> */}

    </div>
)
}

export default Count