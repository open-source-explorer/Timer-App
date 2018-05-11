import React, { Component } from 'react';

export default class Timer extends Component{
   /* componentDidMount(){
      setInterval(this.tick, 1000);
} */
  constructor(props){
    super(props);

    this.state = {time: 0};
    this.pause_disabled = true;
    this.reset_disabled = true;
    this.start_button = 'Start';
    this.pause_button = 'Pause';
    this.reset_button = 'Reset';
    this.startTimer = this.startTimer.bind(this);
    this.changeState = this.changeState.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer(){
    this.start_disabled = true;
    this.pause_disabled =  false;
    this.start_button = 'Start';
    this.timer = setInterval(this.changeState, 1000);
  }
  changeState(){
    this.setState({time: this.state.time+=1});
    console.log(this.state);
  }
  pauseTimer(){
    this.start_disabled = false;
    this.pause_disabled = true;
    this.reset_disabled = false;
    this.start_button = 'Resume';
    this.clear();
  }
  clear(){
    clearInterval(this.timer);
  }
  resetTimer(){
    this.reset_disabled = true;
    this.setState({time: 0});
  }

  render(){
    return (
      <div>
        <h1 style={{fontSize: 160, textAlign: 'center'}}>{this.state.time} s</h1>
        <br />
        <center>
        <button type = 'button' onClick = {this.startTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.start_disabled}>{this.start_button}</button>
        <button type = 'button' onClick = {this.pauseTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.pause_disabled}>{this.pause_button}</button>
        <button type = 'button' onClick = {this.resetTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.reset_disabled}>{this.reset_button}</button>
        </center>
      </div>
    );
  }
}
