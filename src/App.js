import React, {Component} from 'react';
import Contact from './components/Contact';
import LooseLeaf from './components/LooseLeaf';
import Contacts from './components/Contacts.css';
import LooseLeafs from './components/LooseLeafs.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            route: 'contact'
        }
    }
    onRouteChange = () => {
        this.setState({route : 'looseleaf'});
    }
    render(){
     return (
         <div>
         {this.state.route === 'contact' ? 
         <Contact onRouteChange={this.onRouteChange}/> :
          <LooseLeaf/>
         }
         </div>
  );   
    }
}

export default App;
