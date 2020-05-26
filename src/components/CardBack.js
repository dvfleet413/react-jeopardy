import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom'


export default class CardBack extends Component {

    render(){
        return(
            <Zoom duration='650' >
                <div id={this.props.questionId} className="card-back" onClick={event => {this.props.handleClick(event)}}>
                    <p>{this.props.answer}</p>
                </div>
            </Zoom>
        )
    }
}