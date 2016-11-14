import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <p>React js template</p>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));