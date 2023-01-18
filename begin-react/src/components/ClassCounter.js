import React, { Component } from 'react';

class ClassCounter extends Component {
    // state 사용하기 ~~
    // constructor(props) {
    //     super(props);
    //     // state초기 값 설정
    //     // 수정하려면 setState써야 함!
    //     this.state = {
    //         number: 0
    //     }
    // }
    state = {
        number: 0
    }
    render() {
        const {number} = this.state;
        return (
            <div>
                <h2>{number}</h2>
                <button onClick={() => {
                    this.setState({number: number + 1});
                }}>+1</button>
                <button onClick={() => {
                    this.setState({number: number - 1});
                }}>-1</button>
            </div>
        )
    }
}

export default ClassCounter;