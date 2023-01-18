import React, { useState } from 'react';

const TodoList = () => {
    // list 상태
    const [lists, setLists] = useState([
        {
            no: 1,
            text: "오늘 점심 뭐 먹지"
        },
        {
            no: 2,
            text: "오늘 뭐 하지"
        },
    ])
    // input 상태
    const [inputs, setInputs] = useState("");
    // no 상태
    const [nextNo, setNextNo] = useState(3);

    // 이벤트 연결
    // 이벤트 발생 시 input 값의 상태를 변경해주는 함수 만들자 
    const onChange = (e) => {
        setInputs(e.target.value);
    }

    // + 버튼 클릭 했을 때 
    const onClick = () => {
        // nextList라는 변수의 배열 안에 새로운 lists 객체가 추가 됨
        const nextList = [
            // 기존 lists객체는 유지, 
            ...lists,
            // 새로운 lists객체를 덮어 씌워줌
            {
                no: nextNo,
                text: inputs
            }
        ];
        // 추가 됐을 때 상태 변경
        setInputs(""); // input안의 값 상태 다시 비워줌
        setNextNo(nextNo + 1) // no값에 1더해줌
        setLists(nextList); // 새로운 리스트 객체를 lists에 업데이트
    }

    // x 버튼 클릭 했을 때 
    const onRemove = (no) => {
        // filter 사용해 lists의 지워진 no값이랑 다를 때 나머지 no값들을 nextList배열에 담아줌
        const nextList = lists.filter(lis => lis.no !== no);
        setLists(nextList); // 새로운 리스트 객체를 lists에 업데이트
    }

    // li들을 화면에 출력해주기 위한 map을 돌려보자
    // li에 고유 key 값 지정하기 
    const list = lists.map((lis,index) => 
    <li key={index}>{lis.text}
    {/* onRemove의 매개변수인 no를 받아오기 위해 화살표함수 사용해 식을 넣어줬다 ! */}
    <button onClick={() => {onRemove(lis.no)}}>X</button>
    </li>)
    return (
        <div>
        </div>
    );
};

export default TodoList;