import React,{useState} from 'react';

const InterationSpample = () => {
    // 배열의 상태 관리
    const [names,setNames] = useState([
        {
            id: 1,
            text: '눈'
        },
        {
            id: 2,
            text: '팥빙수'
        },
        {
            id: 3,
            text: '귤'
        },
        {
            id: 4,
            text: '붕어빵'
        }
    ])
    // input 상태 관리
    const [inputText, setInputText] = useState("");

    // id 상태 관리
    const [nextId,setNextId] = useState(5);

    // 추가 버튼 클릭 시 실행될 함수
    const onClick = () => {
        const nextNames = [
            // 원래 있던 객체를 뿌려줌
            ...names,
            {
                id: nextId,
                text: inputText
            }
        ]
        setNextId(nextId + 1); // 다음 id값을 업데이트
        setNames(nextNames); // names 배열 업데이트
        setInputText(""); // input안의 값 비워주는 업데이트
    }

    // 삭제 버튼 클릭 시 실행될 함수
    const onRemove = (id) => {
        // name의 클릭한 id랑 다를 때 나머지 id들을 배열로 반환
        // ex) id 가 3인 버튼을 클릭 => id가 3을 제외한 나머지 id 값들을 화면에 출력
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    // 이벤트 발생 시 input 값의 상태가 변경되는 함수 표현식
    const onChange = (e) => {
        setInputText(e.target.value);
    }
    // const names = ['눈','팥빙수','귤','붕어빵'];
    // namelist에는 names에 담긴 배열을 map메소드를 통해 매개변수 name을 받아 
    //<li>{name}</li> list태그에 담아 새로운 형태의 배열로 담겼다.
    // 배열에 담긴 li들을 구분해주기 위해 map을 쓸 땐 key값을 지정 해줘야 함
    // li의 key값은 배열의 index를 받아와 지정해줌 (몇 번째 친구인지 알 수 있게 함)
    const namelist = names.map((name, index) => 
    <li key={index}>{name.text} 
    {/* 함수의 값을 전달해주는 게 있을 때 화살표 함수로 감싸서 넣어줌 ! */}
    <button onClick={() => onRemove(name.id)}>삭제</button>
    </li>);
    return (
        <div>
            {/* 이벤트명={함수명} */}
            <input onChange={onChange} value={inputText}/>
            <button onClick={onClick}>추가</button>
            <ul>
                {namelist}
            </ul>
        </div>
    );
};

export default InterationSpample;