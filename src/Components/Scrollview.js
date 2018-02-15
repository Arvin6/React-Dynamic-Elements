import React, {Component} from 'react'

class NamesView extends Component{
    render()
    {
        return (
        <div className="element">
            <div className="fname">
          {this.props.firstname} 
          </div>
          <div className="lname">
           {this.props.lastname}
           </div>
          </div>
        );
    }
}

export default NamesView;