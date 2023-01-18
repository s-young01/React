// 리액트가 가지고 있는 useState함수를 쓰겠다..는 뜻
import React, {useState} from 'react';

const Counter = () => {
    // const numberArray = useState(0);
    // const number = numberArray[0];
    // const setNumber = numberArray[1];

    // 구조분해할당하기
    // [상태변수명, 상태업데이트해주는함수명] = useState(상태 초기 값)
    const [number, setNumber] = useState(0);
    const onIncreasse = () => {
        // console.log('+1');
        setNumber(number +1);
        console.log(number);
    }
    const onDecreasse = () => {
        // console.log('-1');
        setNumber(number -1);
        console.log(number);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncreasse}>+1</button>
            <button onClick={onDecreasse}>-1</button>
        </div>
    );
};

export default Counter;