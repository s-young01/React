import React from 'react';

const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    );
}
const UserList = () => {
    const users = [
        {
            id: 1,
            username: '세영',
            email: '세영@green.com'
        },
        {
            id: 2,
            username: '수민',
            email: '수민@green.com'
        },
        {
            id: 3,
            username: '주원',
            email: '주원@green.com'
        }
    ]
    return (
        <div>
            {/* user 컴포넌트가 들어갈 자리 */}
            {/* map을 돌릴 때 배열의 요소가 몇번 째 친구인지 알게 하기 위해
            key 값을 지정해야 함 */}
            {users.map(user => (<User key={user.id} user={user}/>))} 
            {/* 
            배열에 담겨 있는 User컴포넌트 요소의 개수 만큼 출력해주기 위해 map메소드를 사용할거다     
            <div>
                <b>{users[0].username}</b>
                <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b>
                <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b>
                <span>{users[2].email}</span>
            </div> */}
        </div>
    );
};

export default UserList;