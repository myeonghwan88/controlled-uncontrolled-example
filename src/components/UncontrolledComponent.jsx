import React from "react";

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        {/* <input id="my-input" /> */}
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
  // 최초로 마운트 된 시점
  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value)를 꺼내서 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input.value);
    console.log("this.inputRef.current.value", this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
