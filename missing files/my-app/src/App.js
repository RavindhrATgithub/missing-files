import logo from './logo.svg';
import React,{Component} from 'react';
import axios from 'axios';





class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state={
      name:"hi"
    };
      
  }

  connect=()=>{
    axios.get('http://localhost:100/test')
    .then((Response)=> 
    {
      
      console.log(Response.data.welcome) 
    
      this.setState({ name: Response.data.welcome});
    
  
    }).catch((error)=>
     {
      
      console.log(error);
    });
  }  


  

  
  render()
  {
  

  return(
    <div className='one'>function called

     <h1>Welcome Mr: {this.state.name}</h1>
   
      <button onClick={this.connect}>Click</button>
        
    </div>
  );
  

  }
}


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React

    //       Welcome Ravindhranath Good Start
    //     </a>
    //   </header>
    // </div>

  
export default App;
