import React, {Component} from "react";
import propTypes from "prop-types";

class ClassComponent extends Component {
    // 클래스 내에서 props의 기본 값 주고 싶을 때
    // static 
    static defaultProps = {
        name: "기본이름"
    }
    // props의 type주고 싶을 때
    static propTypes = {
        name: propTypes.string
    }
    render() {
        const {name, children} = this.props;
        return (
            <div> 왜지 ????????? 
                <p>{name}아 반가워 라고 할뻔~~</p>
                {children}
            </div>
        )
    }
}

// propTypes 종류 
// 1. array : 배열
// 2. bool : true or false
// 3. func : 함수
// 4. number : 숫자
// 5. string : 문자열
// 6. object : 객체 
// 7. any : 아무 종류
// props의 타입 지정하기 
// ClassComponent.propTypes = {
//     // .isRequired : 해당 props가 필수 속성이라는 뜻 (없으면 콘솔창에서 뭐라 함..)
//     name: propTypes.string.isRequired
// }

// props의 기본 값 주기 (함수형과 동일하게 작성)
// ClassComponent.defaultProps = {
//     name: "abc"
// }

export default ClassComponent;