import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'

export default class FinalJeopardyCardBack extends Component {
    render(){
        return(
            <Zoom duration='650' >
                <div id={this.props.questionId} className="final-jeopardy-card-back">
                    <p>{this.props.question}</p>
                </div>
            </Zoom>
        )
    }
}