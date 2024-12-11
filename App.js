import Button from "./Button";

import { Component } from "react";

class App extends Component{
  render(){

    return(
      <div>
       <div className="container-fluid">
          <h1> hello...welcome to react liberary</h1>
          </div>
          
      <div className="container">

        <Button text="Button-1"  color="primary"/> 
        <Button text="Button-2"  color="danger"/> 
        <Button text="Button-3"  color="success"/> 
        <Button text="Button-4"  color="muted"/> 
        <Button text="Button-5"  color="info"/> 
        <Button text="Button-6"  color="warning"/> 
        <Button color="success"/> 

      </div>
      
    </div>

    );
  }
  
}

//This is function based component
// function App() {
//   return (
    // <div>
    //    <div className="container-fluid">
    //       <h1> hello...welcome to react liberary</h1>
    //       </div>
          
    //   <div className="container">
    //     <Button/> 
    //     <Button/> 
    //     <Button/> 
    //     <Button/> 
    //     <Button/> 
    //     <Button/> 
    //     <Button/> 

    //   </div>
      
    // </div>
//   );
// }

export default App;
