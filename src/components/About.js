
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent did mount");
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>This is me Shreekant Kerkar</h1>
        <h2>I'm Learning Namaste React Web Series</h2>
        <UserClass name={"First"} />
      </div>
    );
  }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>This is me Shreekant Kerkar</h1>
//             <h2>I'm Learning Namaste React Web Series</h2>
//             <User name = {"Shreekant (functional)"}/>
//             <UserClass name = {"Shree"}/>
//         </div>
//     )
// }
export default About;
