import React, { useState } from 'react';

const InputSample = () => {
    // 배열 구조분해할당
    // useState함수의 초기 값에는 객체가 담김 !
    // inputs => useState()에 설정한 상태가 담김 => 객체가 담김
    // setInputs => 설정한 상태를 업데이트 해주는 함수가 담김
    const [inputs, setInputs] = useState({
        // 기본 상태 설정 
        username: '', 
        usernickname: ''
    });
    // 객체 구조분해할당 (inputs객체 각각의 key값으로 다시 추출)
    const {username, usernickname} = inputs;
    // 이벤트가 일어날 때 값이 담기는 함수
    const onChange = (e) => {
        // 이벤트 발생 시 => value에는 입력 값이 담기고, name에는 username / usernickname 이 담김
        const {value, name} = e.target;
        setInputs({
            // 원래 있던 객체를 뿌려주고
            ...inputs,
            // 원래 있던 값은 유지, 새로운 값만 덮어줌
            // 객체의 key값이 담긴 변수를 써주고 싶을 땐 대괄호 사용 !
            // [name] => username, usernickname의 값을 할당한 변수가 담김 !
            [name]:value
        })
    }
    const onReset = () => {
        // onReset함수에는 다시 빈 문자열이 담긴 객체를 리턴해줌 
        setInputs ({
            username: '',
            usernickname: ''
        })
    }
    return (
        <>
            {/* input value={usrename} =>  input value의 상태의 초기 값이 담김 */}
            <input name="username" onChange={onChange} value={username}/>
            <input name="usernickname" onChange={onChange} value={usernickname}/>
            <button onChange={onReset}>초기화</button>
            <div>
                <span>값 : {username}, {usernickname}</span>
            </div>
        </>
    );
};

export default InputSample;