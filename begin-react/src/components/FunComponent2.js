import React, {useState} from "react";
const FunComponent2 = ({name, children}) => {
    /* name: "green", children : "Hello" => App에서 받아온 props*/
    const [number, setNumber] = useState(0);
    const onAddNum = () => {
        setNumber(number + 1);
    }
    return (
        <div>
            <h2>{number}<button onClick={onAddNum}>+1</button></h2>
            {name} {children}
        </div>
    )
} 

export default FunComponent2;