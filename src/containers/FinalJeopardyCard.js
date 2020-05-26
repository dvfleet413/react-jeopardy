import React, {Component} from 'react'
import FinalJeopardyCardBack from '../components/FinalJeopardyCardBack'
import FinalJeopardyCardFront from '../components/FinalJeopardyCardFront'

export default class FinalJeopardyCard extends Component {
    state = {
        displayQuestion: false
    }

    handleClick = (event) => {
        this.setState(prevState => {
            return {displayQuestion: !prevState.displayQuestion}
        })
    } 
    
    render(){
        if (this.state.displayQuestion){
            return(<FinalJeopardyCardBack question={this.props.question.answer} />)
        } else {
            return(<FinalJeopardyCardFront category={this.props.question.category} handleClick={this.handleClick}/>)
        }
    }




}