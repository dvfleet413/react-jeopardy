import React, { Component } from 'react'
import CardFront from '../components/CardFront'
import CardBack from '../components/CardBack'
import BlankCard from '../components/BlankCard'
import DailyDouble from '../components/DailyDouble'
import dailyDouble from '../assets/audio/dailyDouble.mp3'

export default class QuestionCard extends Component {
    state = {
        displayQuestion: false,
        displayDailyDouble: false,
    }

    handleClick = (event) => {
        if (this.props.question.dailyDouble && !this.state.displayDailyDouble){
            const audio = new Audio(dailyDouble)
            audio.play()
        }
        if (this.state.displayQuestion){this.props.answerQuestion(this.props.question.id)}
        this.setState(prevState => {
            return {displayQuestion: !prevState.displayQuestion}
        })
    }

    dailyDoubleClick = (event) => {
        this.setState({
            displayDailyDouble: true
        })
    }

    render(){
        if (this.props.question.answered && !this.state.displayQuestion){
             return (<div className="question-card card-general"><BlankCard /></div>)
        } else if (this.props.question.dailyDouble && !this.state.displayDailyDouble){
            return(
                <div className="question-card card-general">
                    {this.state.displayQuestion ? <DailyDouble question={this.props.question} handleClick={this.dailyDoubleClick}/> : <CardFront title={this.props.question.value} handleClick={this.handleClick} />}  
                </div>
            )
        } else {
            return(
                <div className="question-card card-general">
                    {this.state.displayQuestion ? <CardBack questionId={this.props.questionId} answer={this.props.question.answer} handleClick={this.handleClick} /> : <CardFront title={this.props.question.value} handleClick={this.handleClick} />}  
                </div>
            )
        }
    }
}