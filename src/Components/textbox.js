import React, {Component} from 'react'
import PropTypes from 'prop-types';


class TextBox extends Component{

    static propTypes = {
        add: PropTypes.func.isRequired,
    };


    constructor(){
        super();
        this.state = {
            fname : '',
            lname : ''
        }
        this.submit = this.add.bind(this)
        this.f_nameChanged = this.f_nameChanged.bind(this)
        this.l_nameChanged = this.l_nameChanged.bind(this)
    }

    add(e){
        e.preventDefault()
        this.props.add(this.state.fname,this.state.lname)
        this.setState({
            fname : '',
            lname : ''
        })
    }

    f_nameChanged(e){
        this.setState({
            fname : e.target.value
        })
    }

    l_nameChanged(e){
        this.setState({
            lname : e.target.value
        })
    }

    render(){
       return ( <div className="textbox">
        <input type="text"
         placeholder="first_name"
         onChange={this.f_nameChanged}
         value={this.state.fname}
         />
        <input type="text"
         placeholder="last_name"
         onChange={this.l_nameChanged}
         value={this.state.lname}
         />
        <button onClick={this.add}>+</button>
        </div>
       )
    }
}

export default TextBox;