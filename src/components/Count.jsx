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

    }, [toggle]) 
    // [] you need this empty array so it runs one time

    const triggerUseEffect = () => {
        setToggle(toggle ? false: true) //my way
        // setToggle(!toggle) //simpler way
        console.log(toggle);
        
    }
    // change toggle staete from false to true and the oppiset
    

return(

    <div>
        <h1> Count.jsx</h1>
        <p> {count}</p>
        {/* <button onClick={handleClick}> +1</button> */}
        <button onClick={triggerUseEffect}>Trigger useEffect</button>

    </div>
)
}

export default Count