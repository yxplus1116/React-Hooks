import React, { useReducer } from "react";

// https://juejin.cn/post/6844903817981460493
// useReducer 实际上是 useState 的扩展升级版 能处理更为复杂的状态

// 全局共用状态
const myReducer = (state, action) => {
  switch (action.type) {
    case "add1":
      return {
        ...state,
        count1: state.count1 + 1,
      };
    case "dec1":
      return {
        ...state,
        count1: state.count1 - 1,
      };
    default:
      return state;
  }
};

// 独享状态
const onlyReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state.count;
  }
};

const ReducerComponents = () => {
  const [state, dispatch] = useReducer(myReducer, { count1: 1, count2: 2 });

  const [onlyState1, onlyDispatch1] = useReducer(onlyReducer, 0);
  const [onlyState2, onlyDispatch2] = useReducer(onlyReducer, 0);
  return (
    <>
      <h2>共享state</h2>
      <button
        onClick={() => {
          dispatch({ type: "add1" });
        }}
      >
        +
      </button>
      <h3>cont: {state.count1}</h3>
      <button
        onClick={() => {
          dispatch({ type: "dec1" });
        }}
      >
        -
      </button>
      <h3>count: {state.count1}</h3>
      <h2>独享state</h2>
      <button onClick={() => onlyDispatch1({ type: "add" })}>+</button>
      <button onClick={() => onlyDispatch1({ type: "dec" })}>-</button>
      <h3>only1:{onlyState1}</h3>
      <button onClick={() => onlyDispatch2({ type: "add" })}>+</button>
      <button onClick={() => onlyDispatch2({ type: "dec" })}>-</button>
      <h3>only2:{onlyState2}</h3>
    </>
  );
};

export default ReducerComponents;
