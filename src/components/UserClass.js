import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  //receiving props from class based component
  constructor(props) {
    super(props);
    this.state = {
      //userInfo:{
      // name : "Dummy",location : "Default"
      //},
    };
    //console.log(this.props.name + " constructor called");
  }

  componentDidMount() {
    //console.log(this.props.name + " child component did mount");
    //async componentDidMount() {
        //const data = await fetch("Link to the GitHub API")
        //const json await data.json();
    //}
    // this.setState({userInfo : json});
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name } = this.props;
    //console.log("child render method called");
    //const {name , location} = this.state.userInfo

    return (
      <div className="user-card">
        <h1>{name}</h1>
        <div>
          <UserContext.Consumer>
            {({loggedUser}) => (
              <h1 className="text-xl font-bold">{loggedUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Age : 21</h2>
        <h3>Location : Aurangabad</h3>
      </div>
    );
  }
}

export default UserClass;
