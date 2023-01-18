import React, {Component} from "react";

class Sample2 extends Component {
    // list 상태
    state = {
        lists: [
            {
                id: 1,
                text: '눈'
            },
            {
                id: 2,
                text: '눈'
            },
        ]
    }
    // 버튼 클릭 했을 때
    onClick = () => {
        const nextLists = [
            ...this.state.lists,
        ]
    }
    render() {
        const lists = this.state.lists.map(lis => <li>{lis.text}</li>)
        return (
            <div>
                <input/>
                <button>추가</button>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}

export default Sample2;