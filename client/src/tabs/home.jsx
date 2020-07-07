import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeTab extends React.Component{
    constructor(props){
        super(props);
        this.state = "";
    }

    render(){
        return(
            <body>
                <div className="bg">
                    <p className="homeText">
                    Hello! My name is Trent Kempker and I am a Computer Science graduate from Kansas State University. I am passionate about developing software, sports, and spending time with friends and family! 
                    </p>
                </div>
            </body>
        );
    }
}

export default HomeTab;