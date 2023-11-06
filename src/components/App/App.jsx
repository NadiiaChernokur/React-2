import { Component } from "react";
import { Buttons } from "../Button/buttons";
import { Statistics } from "../Statistics/statistics";
import { Notification } from "../notification";
import { ContainerApp } from "./app.styled";



export class  App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  statisticPlus = (name) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1 
    })
   
    )
  
  }

  totalCaunt = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral
  }

  cauntProzent = () => {
    const { good, bad, neutral } = this.state;
    const prozentValue = (good / (good + neutral + bad)) * 100;
    return Math.round(prozentValue)
   }
      
  render() {
  
    return (
      <ContainerApp>
        <h1>Please leave feedback</h1>
        <Buttons options={['good', 'neutral', 'bad']} onClick={this.statisticPlus}  />
        <h2>Statistics</h2>
       
        {this.totalCaunt() > 0 ?
          (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.totalCaunt()} prozent={this.cauntProzent()} />)
          : (<Notification message="There is no feedback" />)
        }

      </ContainerApp>
      
    )
   
  }
};
