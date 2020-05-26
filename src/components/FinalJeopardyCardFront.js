import React, {Component} from 'react'
import Zoom from 'react-reveal/Zoom'

export default class FinalJeopardyCardFront extends Component {
    render(){
        return(
            <Zoom duration='650'>
                <div className='final-jeopardy-card-front' onClick={event => this.props.handleClick(event)}>
                    <h4>{this.props.category}</h4>
                </div>
            </Zoom>
        )
    }
}