class ButtonWithCounter extends React.Component {
  /*state = {
    "counter": 0,
  }*/

  render() {
    return <>
      <h1>{this.props.title}</h1>
      <button onClick={this.props.onChange}>
        +
      </button>
      <span>{this.props.counter}</span>
    </>
  }
}

export default class extends React.Component {
  state = {
    "counter": 0,
    "counter2": 100,
    "commonCounter": 10,
  }

  handleOnCounterClick = () => {
    this.setState({
      "counter": this.state.counter + 1
    })
    alert("Привет, ты нажал на меня")
  }

  handleOnCounter2Click = () => {
    this.setState({
      "counter2": this.state.counter2 - 1
    })
  }

  handleOnChange = () => {
    this.setState({ "commonCounter": this.state.commonCounter + 1 })
  }

  render() {
    return (
      <>
                  <style>{`
                    h1,button {
                        background: blue;
                       //background: #FF0000;
                       //background: rgb(255, 0, 0);
                    }
                    button {
                      font-weight: bold;
                    }
                `}</style>
      <p>
        <a href="/contests">Go to contests!</a>
      </p>
      <a href = "/page2">Page2</a>
        <h1>
          Привет!
          <i>наклонный текст</i>
        </h1>
        <ButtonWithCounter
          title={"Это моя первая кнопка"}
          onChange={this.handleOnChange}
          counter={this.state.commonCounter}
        />

        <ButtonWithCounter
          onChange={this.handleOnChange}
          counter={this.state.commonCounter}
        ></ButtonWithCounter>
        
      </>
    )
  }
}
