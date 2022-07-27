import {Component} from 'react';
import {Button} from 'react-bootstrap';


class Child extends Component{
    constructor(props) {
        super(props);
    }

    buttonChange = () => {
        let numb = "ini dari child"
        this.props.callback(numb)
        
    }

   


    render() {
        return (
            <div>
                Name : {this.props.name} Age : {this.props.age}
                <br/> 
                <Button onClick = {this.buttonChange}> Change </Button>
                <br/>
                {this.props.message}
            </div>
        )
    }
}

// button di child ini


export default Child;