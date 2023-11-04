import { Component } from "react";
import { Buttons } from "./buttons";
import { Statistics } from "./statistics";
import { Notification } from "./notification";



export class  App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  statisticPlus = (e) => {
    const keys = Object.keys(this.state);
    const buttonName = e.target.name;;
    keys.forEach(value => {
      const v = value;
      if (buttonName === v) {
        return this.setState(prevState => {
          return {
            [v]: prevState[v] + 1,
          }
        })
      }
    }
      )
  }

  renderStatistic = () => {
    const value = (this.state.good > 0 && this.state.neutral > 0 && this.state.bad);
    
      if (value) {
        return <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      } else {
        return <Notification message="There is no feedback"></Notification>
      }
        
    
  }
    
      
  render() {
    const value = (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0);
    
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons options={['good', 'neutral', 'bad']} onClick={this.statisticPlus} />
        <h2>Statistics</h2>
        {value && (
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}  />
        )
         
        }
          {this.renderStatistic}

        
        {/* {value
          ?  <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} /> 
          : <Notification message="There is no feedback"></Notification> 
              
        } */}

        {/* {value
          ? ( <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} /> )
          : (<Notification message="There is no feedback"></Notification> )
              
        } */}
        
       
      </div>
      
    )
   
  }
};
