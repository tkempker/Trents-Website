import React from 'react';
import './App.css';
import  Nav from 'react-bootstrap/Nav';
import  Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavItem, Jumbotron } from 'react-bootstrap';
import HomeTab from '../src/tabs/home';
import AboutTab from '../src/tabs/about';
import ContactTab from '../src/tabs/contact';


var currentView = <HomeTab />;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
    this.currentView = <HomeTab />;
  }
  
  callAPI(){
    fetch("http://localhost:9000/testapi")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
    this.forceUpdate();
  }

  handleHomeTab = () => {
    currentView = <HomeTab />;
    this.forceUpdate();
  };

  handleAboutTab = () => {
    currentView = <AboutTab />;
    this.forceUpdate();
  };

  handleContactTab = () => {
    currentView = <ContactTab />;
    this.forceUpdate();
  };

  render(){
    return (
      <div>
        <header>
          <Navbar bg="light">
            <Navbar.Brand eventKey={1} onClick={this.handleHomeTab}>Trent's Website</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link eventKey={1} onClick={this.handleHomeTab}>Home</Nav.Link>
                <Nav.Link eventKey={2} onClick={this.handleAboutTab}>About</Nav.Link>
                <Nav.Link eventKey={3} onClick={this.handleContactTab}>Contact</Nav.Link>
              </Nav>
          </Navbar>
        </header>
          
        {currentView}

        {/* <p>{this.state.apiResponse}</p> */}
      </div>
        
        
    );
  }
}



export default App;
