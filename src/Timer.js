import React, { Component } from 'react';

export default class Timer extends Component{
   /* componentDidMount(){
      setInterval(this.tick, 1000);
} */
  constructor(props){
    super(props);

    this.state = {time: {'hours':0, 'minutes':0, 'seconds':0},
    pause_disabled : true,
    reset_disabled : true,
    start_button : 'Start',
    pause_button : 'Pause',
    reset_button : 'Reset'};

    /*this.startTimer = this.startTimer.bind(this);
    this.changeState = this.changeState.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);*/
  }
  startTimer(){
    this.setState({
    start_disabled : true,
    pause_disabled :  false,
    reset_disabled : true,
    start_button : 'Start'});
    this.timer = setInterval(this.changeState, 1000);
  }
  changeState(){
    if(this.state.time['seconds'] <= 59){
    this.setState({time['seconds'] : this.state.time['seconds'] += 1});
    }
    else{
      this.setState({time['seconds'] : 0, time['minutes'] : this.state.time['minutes'] += 1);
      if(this.state.time['minutes'] > 59){
        this.setState({time['seconds'] : 0, time['minutes'] : 0, time['hours'] : this.state.time['hours'] += 1});
        if(this.state.time['hours'] > 24){
          this.setState({time['hours']: 0});
        }
      }
    }

    console.log(this.state);
  }
  pauseTimer(){
    this.setState({start_disabled : false,
    pause_disabled : true,
    reset_disabled : false,
    start_button : 'Resume'
    });
    clearInterval(this.timer);
  }
  resetTimer(){
    this.setState({time: 0, reset_disabled : true, start_button : 'Start'});
  }

  render(){
    return (
      <div>
        <h1 style={{fontSize: 120, textAlign: 'center'}}>{this.state.time['hours']} : {this.state.time['minutes']} : {this.state.time['seconds']} s</h1>
        <br />
        <center>
        <button type = 'button' onClick = {this.startTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.state.start_disabled}>{this.state.start_button}</button>
        <button type = 'button' onClick = {this.pauseTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.state.pause_disabled}>{this.state.pause_button}</button>
        <button type = 'button' onClick = {this.resetTimer} style = {{fontSize: 50, borderRadius: 10}} disabled = {this.state.reset_disabled}>{this.state.reset_button}</button>
        </center>
      </div>
    );
  }
}
