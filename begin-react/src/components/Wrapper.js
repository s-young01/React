import React from 'react';

// {children} : 컴포넌트 안에 컴포넌트 쓰고 싶을 때 
const Wrapper = ({children}) => {
    return (
        <div>
            <h2>children을 배워봅시다.</h2>
            {/* 원하는 위치에 넣어줌  */}
            {children}
        </div>
    );
};

export default Wrapper;