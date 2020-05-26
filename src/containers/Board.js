import React, { Component } from 'react'
import {Row, Container} from 'react-bootstrap'
import Category from './Category'
import questions from '../data'
import FinalJeopardyCard from './FinalJeopardyCard'


export default class Board extends Component {
    state = {
        round: 1,
        categories: [...new Set(questions.filter(question => (question.id > 0 && question.id <= 30)).map(question => question.category))],
        questions: questions.filter(question => (question.id > 0 && question.id <= 30))
    }

    answerQuestion = (key) => {
        if (this.state.questions.filter(question => !question.answered).length === 1){
            this.state.round === 1 ? this.advanceToDoubleJeopardy() : this.advanceToFinalJeopardy()
        }
        this.setState(prevState => {
            return { questions: prevState.questions.map(question =>  question.id === key ? { ...question, answered: true } : question) }
        })
    }

    advanceToDoubleJeopardy = () => {
        this.setState({
            round: 2,
            categories: [...new Set(questions.filter(question => (question.id > 30 && question.id <= 60)).map(question => question.category))],
            questions: questions.filter(question => (question.id > 30 && question.id <= 60)),
        })
    }

    advanceToFinalJeopardy = () => {
        this.setState({
            round: 3,
            categories: [questions.find(question => (question.id === 61)).category],
            questions: [questions.find(question => (question.id === 61))]
        })
    }

    render(){
        const categories = this.state.categories.map((category, index) => {
            const questions = this.state.questions.filter(question => question.category === category)
            return(
                <Row key={index}>
                    <Category category={category} questions={questions} finishCategory={this.finishCategory} answerQuestion={this.answerQuestion} />
                </Row>
            )
        })
        if(this.state.round <= 2){
            return(
                <div id="board">
                    <Container>
                        { categories }
                    </Container>
                </div>
            )
        } else {
            return(
                <div>
                    <FinalJeopardyCard question={this.state.questions[0]} />
                </div>
            )
        }
    }
}