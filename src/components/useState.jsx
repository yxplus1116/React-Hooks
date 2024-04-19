import { useState } from "react";

const useStateComponent = (props) => {
  // 第一个参数是 props，它是一个包含父组件传递给当前组件的所有属性的对象。
  console.log(props);
  // 基础用法
  const [num, setNum] = useState(0);
  const add1 = () => {
    setNum(num + 1);
  };
  const dec1 = () => {
    setNum(num - 1);
  };

  const parentHandle = () => {
    props.parentHandle();
  };

  //   进阶用法
  const [pets, setPets] = useState({ dog: 0, cart: 0 });

  return (
    <>
      <p onClick={parentHandle}>{props.parentData}</p>
      <div>
        <p>{num}</p>
        <button onClick={add1}>+</button>
        <button onClick={dec1}>-</button>
      </div>

      <div>
        <p>dog:{pets.dog}</p>
        <button
          onClick={() => {
            setPets({ ...pets, dog: pets.dog + 1 });
          }}
        >
          dog+1
        </button>
        <button
          onClick={() => {
            setPets({ ...pets, dog: pets.dog - 1 });
          }}
        >
          dog-1
        </button>
      </div>
      <div>
        <p>cart:{pets.cart}</p>
        <button
          onClick={() => {
            setPets({ ...pets, cart: pets.cart + 1 });
          }}
        >
          cart+1
        </button>
        <button
          onClick={() => {
            setPets({ ...pets, cart: pets.cart - 1 });
          }}
        >
          cart-1
        </button>
      </div>
    </>
  );
};

export default useStateComponent;
