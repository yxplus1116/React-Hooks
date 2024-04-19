import { useState } from "react";

const useStateComponent = () => {
  // 基础用法
  const [num, setNum] = useState(0);
  const add1 = () => {
    setNum(num + 1);
  };
  const dec1 = () => {
    setNum(num - 1);
  };

  //   进阶用法
  const [pets, setPets] = useState({ dog: 0, cart: 0 });

  return (
    <>
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
