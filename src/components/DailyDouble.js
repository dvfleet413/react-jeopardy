import React, {Component} from 'react'
import Zoom from 'react-reveal/Zoom'


export default class DailyDouble extends Component {
    render(){
        return(
            <Zoom duration='650'>
                <div id={this.props.question.id} className="daily-double card-back" onClick={event => this.props.handleClick(event)}>
                    <h2>Daily<br />Double</h2>
                </div>
            </Zoom>
        )
    }
}