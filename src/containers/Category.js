import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import CategoryTitle from '../components/CategoryTitle'


export default class Category extends Component {
    state = {
        finished: false
    }

    render(){
        const cards = this.props.questions.map(question => {
            return(
                <QuestionCard key={question.id} 
                              question={question} 
                              answerQuestion={this.props.answerQuestion} />
            )
        })

        return(
            <>
                <CategoryTitle category={this.props.category} />
                { cards }
            </>
        )
    }
}