import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {} // for storing answers
    // selected = {
    //    question1:"a",
    //    question2:"c"
    // }
    correctAnswers = 0 // To show the number of correct answers
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer: "c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer: "b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const {name, value} = event.target
        // const name = event.target.name 
        // const value = event.target.value
        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event){
        event.preventDefault() // because submit button is inside the form it will refresh the page upon click. We prevent this default behaviour
        //this.selected = {Question1:"a", Question2:"c", Question3:"c"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("this.correctAnswers", this.correctAnswers)
    }

    resetHandler(event){
        this.selected = {}
        this.correctAnswers = 0
    }

}