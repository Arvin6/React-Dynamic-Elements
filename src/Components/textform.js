import React, {Component} from 'react'
import TextBox from './textbox'
import Namesview from './Scrollview'


class TextForm extends Component{
constructor()
{
    super();
    this.state = {
        boxes : []
    }
    this.add = this.add.bind(this)
    this.submit = this.submit.bind(this)
}

submit(e){
    e.preventDefault()
    let values = this.state.boxes.map(
        (object, index) => object.first_name+' '+object.last_name
    )
    alert(values)
    }

    add(fname, lname)
    {
        if (fname==='' || lname === '') return
    this.setState({
    boxes : [...this.state.boxes, {first_name:fname, last_name:lname}]
    })
}

render(){
    return (
    <div className="container">
    <form>
        <div className="scroll-container">
        {
        this.state.boxes.length>=1? 
         this.state.boxes.map(
              (v,i) => <Namesview key={i} firstname={v.first_name} lastname={v.last_name} />
            ):''
        }
        </div>
        <div className="Submit-Btn">
        <TextBox add={this.add}/>
        <button onClick={this.submit}>Submit</button>
        </div>
    </form>
    </div>
    );
}

}


export default TextForm;