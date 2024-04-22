# React Hooks

# 前言
<a name="VJSSq"></a>
# 一，类组件
React 的核心是编写组件。分为类组件和函数组件，v16.8 版本之前，组件的标准写法是类（class），下面是一个简单的组件类：
```

import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = { buttonText: "Click me, please" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  }
  render() {
    const { buttonText } = this.state;
    return <button onClick={this.handleClick}>{buttonText}</button>;
  }
}
```
这个组件类仅仅是一个按钮，但它的代码已经很"重"了。真实的 React App 由多个类按照层级，一层层构成，复杂度成倍增长。再加入 Redux，就变得更复杂。<br />Redux 的作者 [总结](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)了组件类的几个缺点：
:::info

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。
:::

<a name="HELzM"></a>
# 二，函数组件
React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 **组件的最佳写法应该是函数，而不是类。**<br />下面就是一个纯函数组件的例子：
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
但是，这种写法有重大限制，必须是纯函数，不能包含状态，也不支持生命周期方法，因此无法取代类。<br />**React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。**
<a name="XCoCf"></a>
# Hooks 出现的目的：
**React Hooks 的出现旨在加强函数组件的功能，使得纯函数组件能够更便捷地支持状态管理、生命周期等功能，从而不再局限于使用类组件的情况。**


**什么是 React Hook？**

Hook（钩子）是一种特殊的函数，它允许你“钩入”各种 React 特性。假设一个函数返回一个有两个值的数组：
- 第一个值：一个带有状态 state 的变量。
- 第二个值：一个带有处理程序 handle（改变当前状态的函数）的变量。

就是这样，很简单。
记住，在 JavaScript 中，“值是函数，函数是值”。

**React Hooks 的规则**

除了 hook 是 JavaScript 函数这一事实之外，在使用它们时还需要遵循一些规则：

- **只在顶层调用钩子**：不要在循环、条件或嵌套函数中调用钩子。总是在 React 函数（组件）的顶层使用钩子，在任何早期返回之前。这背后的原因是，每次组件渲染时，必须以相同的顺序调用钩子。这使得 React 能够正确地保存多个 useState 和 useEffect 调用之间的钩子状态。
- **只有 React 函数的调用钩子**：这意味着你可以从 React 函数（组件）或自定义钩子调用钩子，但不能从常规 JavaScript 函数调用。

**何时使用 useState Hook**

我们认为当我们需要一个随时间变化的变量时，我们需要保持它 in state。但在大多数情况下，事实并非如此。我的意思是，如果你的变量可以从其他数据推导出来，那么你就不需要状态了。

**State 案例 1**

主题颜色，根据时间变暗或变亮的，可以从系统数据中推导出来。
我们可以简单地从 JS 的 date 函数中获得时间（日期）。所以我们在这里不需要状态，对吧？这是一个可以用表达式或函数声明的常量 const。

**State 案例 2**

一个模式开关（显示/隐藏模式）。
模式切换可以为 true 或 false，当用户单击按钮时触发。因此，在这种情况下，我们真的需要状态，因为我们不能推导这类信息-它只取决于“何时和是否”用户触发事件。
要注意这个区别——什么可以派生推导，什么取决于用户。
当需要存储来自用户的输入时，你将需要使用 useState 钩子。
