import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  console.log("countState start !!!");
  const [count, setCount] = useState(0);
  // let count = 0;
  function minus() {
    setCount(count - 1);
    // count = count - 1;
    console.log("minus", count);
  }
  function plus() {
    setCount(count + 1);
    // count = count + 1;
    console.log("plus", count);
  }
  console.log("countState end !!!");
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}

// props = propertise
// // 태그 안에있는 속성들
// <input class="" id="" type="" value"" />

// 상속의 개념
// : 부모가 자식에게 물려주는 유산
// : 부모가 준 모든 속성을 그대로 가진다.
// : 자식이 따로 자식만의 속성을 가질 수 있다.

// Destructuring 문법
// : 복잡한 객체구조의 경우, 객체내의 key값을 사용하려면 사용문법이 매우 길어지는 불편함이 있음.
// 예) Object,obj.obj2.obj3........
// :객체를 해체해서 간단하게 내부 key를 사용하게 하는 문법

// 예) Object = { name: "Tom", age: 15, 학년: {grade : 6} }
// const {name, age, 학년 : {grade] } = Object;
// console.log(grade); // Tom

// 정적 코드
// <Avatar
//       bgcolor="lightgreen"
//       person={{ name: "Steve", job: "programmer", country: "대한민국"
// />
// 동적 코드
// persons.map(
//       (p)=> <Avatar bgcolor= { colors배열의 멤버 } person={ person 객체} />
// );

// 리액트 Hook (후크)

// useState
// use
// use
// use
// use
// use

// 객체의 디스트럭쳐링
// const {name, score} = 객체이름;
// name은 곧 객체의 key 이므로 spell이 정확해야함.

// 배열의 디스트럭쳐링
// const fruits = ["사과", "바나나", "망고"];
// const [apple, banan, mango] = fruits;

// useState함수의 리턴값은 배열이고 배열의 첫번째 아이템은 value, 두번째 아이템은 value를 수정하는 콜백함수이름
// useState함수의 리턴값은 [valuem setter function]
