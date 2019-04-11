import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    activities: [{
      activityName: '',
      activityHour: '',
    }]
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleArrayChange = (event, index) => {
    var activities = [...this.state.activities]
    activities[index][event.target.name] = event.target.value
    this.setState({ activities })
  }
  handleSubmit = (event) => {
    console.log(this.state)
  }
  addActivity = (e) => {


    var activities = [...this.state.activities, {
      activityName: '',
      activityHour: '',
    }]

    this.setState({ activities })
  }
  removeElement = (e, index) => {
    console.log(index)
    if (this.state.activities.length > 1) {
      var activities = [...this.state.activities]
      activities.splice(index, 1)
      this.setState({ activities })
    }
  }
  render() {
    return (
      <form>
        <div >
          First name: <input type="text" name="firstname" />
          <br />
          Last name: <input type="text" name="lastname" />
          <br />
          activities :
        <ol>
            {this.state.activities.map((obj, index) => {
              return (
                <li key={index}>
                  name:<input type="text" name="activityName" value={obj.activityName} onChange={(e) => this.handleArrayChange(e, index)} />
                  hours<input type="text" name="activityHour" value={obj.activityHour} onChange={(e) => this.handleArrayChange(e, index)} />
                  <button type={"button"} onClick={(e) => this.removeElement(e,index)} >Delete</button>
                </li>
              )
            })}
          </ol>
          <button type={"button"} onClick={this.addActivity}>Add More Activity</button>
          <button type={"button"} onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}
export default App;
