import React from 'react';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text, changed: false };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.changed) {
      return null;
    } else {
      return { text: props.text };      
    }
  }

  setText(newText) {
    this.setState({ text: newText, changed: true });
  }  

  render() {
    const initialText = this.props.text;
    const { text } = this.state;
    const borderBottom = (text === initialText) ? '1px solid green' : '1px solid red';

    return (
      <input
        type='text'
        value={text}
        style={{borderBottom}}
        onChange={(e) => this.setText(e.target.value)}
      />
    )
  }
}

export default class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'hello world' };
  }

  randomizeText() {
    const texts = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    this.setState({ text: texts[Math.floor(Math.random() * texts.length)]});
  }

  render() {
    const {text} = this.state;
    return (
      <div>
        <button onClick={() => this.randomizeText()}>Change Text</button>
        <Textbox text={text} />
        <Textbox text={text} />
        <Textbox text={text} />
        <Textbox text={text} />        
      </div>
    );
  }
}


