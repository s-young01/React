import React from "react";

const FunComponent = (props) => {
    const {name , children} = props;
    return (
        <div>{name}반갑습니다? {children}</div>
    )
}
FunComponent.defaultProps = {
    name: "xyz"
}
export default FunComponent;