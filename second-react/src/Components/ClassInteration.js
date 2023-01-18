import React, {Component} from "react";

class ClassInteration extends Component {
    state = {
        names : [
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
        ],
        inputText: "",
        nextId: 5
    }
    // 이벤트 발생 시 inputText를 업데이트
    onChange = (e) => this.setState({
        ...this.state,
        inputText: e.target.value
    })
    // 추가 클릭했을 때
    onClick = () => {
        const nextNames = [
            ...this.state.names,
            {
                id: this.state.nextId,
                text: this.state.inputText
            }
        ]
        this.setState({
            names: nextNames,
            nextId: this.state.nextId + 1,
            inputText: ""
        })
    }
    // // 삭제 클릭했을 때
    onRemove = (id) => {
        const nextNames = this.state.names.filter(name => name.id !== id);
        this.setState({
            ...this.state,
            names: nextNames
        });
    }

    render() {
        const {names, inputText} = this.state;
        const namelist = names.map((name, index) => 
        <li key={index}>{name.text}
        <button onClick={() => this.onRemove(name.id)}>삭제</button>
        </li>)
        return (
            <div>
                {/* 이벤트명={함수명} */}
                <input value={inputText} onChange={this.onChange}/>
                <button onClick={this.onClick}>추가</button>
                <ul>
                    {namelist}
                </ul>
            </div>
        )
    }
}

export default ClassInteration;