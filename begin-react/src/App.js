import './App.css';
import ClassComponent2 from './components/ClassComponent2';
import ClassCounter2 from './components/ClassCounter2';
// import - from : 불러오기
// import ClassComponent from './components/ClassComponent';
// import ClassCounter from './components/ClassCounter';
import FunComponent2 from './components/FunComponent2';
// import FunComponent from './components/FunComponent';

function App() {
  return (
    <div className="App">
      {/* 클래스 컴포넌트에 감겨져있는 문자열은 자동으로 props.children이 됨 */}
      {/* props 값에 숫자를 넣고 싶으면 중괄호 안에 넣어야 함 */}
      {/* <ClassComponent name="green">안녕하세요</ClassComponent>
      <ClassComponent>나는 name이 없어 ..ㅠ</ClassComponent>
      <FunComponent name="blue">하하하</FunComponent>
      <FunComponent>하하하</FunComponent> */}
      <FunComponent2 name="green">Hello</FunComponent2>
      {/* name: "green", children : "Hello" => props*/}
      <ClassComponent2 name="blue">안녕</ClassComponent2>
      <ClassCounter2/>
    </div>
  );
}

export default App;
