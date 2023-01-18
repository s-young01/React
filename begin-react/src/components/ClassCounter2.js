import React, {Component} from "react";

class ClassCounter2 extends Component {
    state = {
        number: 0
    }
    // 메소드 : 혼자 쓸 수 없음 (자신의 객체랑 같이 사용됨)
    handelIncrease = () => {
        this.setState({number: this.state.number + 1})
    }
    render() {
        const {number} = this.state;
        return (
            <div>
                <h2>{number}</h2>
                {/* <button onClick={() => {
                    this.setState({number: number + 1})
                }}>+1</button> */}
                <button onClick={this.handelIncrease}>+1</button>
            </div>
        )
    }
}

export default ClassCounter2;