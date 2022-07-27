import {Component} from 'react';
import Child from './Child'

// import PropTypes from 'prop-types';
class Parent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            message : "ini dari parent"
        }

       
    }

    change = (val) => {
        this.setState({
            message: val
        })
    }

    render() {
        return (
            <div>
                {/* <Child name = {this.props.name} age = {this.props.age}/> */}
                <Child callback = {this.change} name = {this.props.name} 
                age = {this.props.age} message = {this.state.message}/>
                
            
              

            </div>
        )
    }
}

// Parent.propTypes = {
//     name: PropTypes.string
// };

// Parent.defaultProps = {
//     name : "Default Props",
// }


export default Parent;