import React from 'react';
import './index.css';
import Button from './components/UI/Button/Button';
import Card  from './components/UI/Card/Card';
import Banner from './components/UI/Banner/Banner';
import {Route, Routes,Link,BrowserRouter} from 'react-router-dom';

//create class component
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionsCorrect: 0,
            count:0,
            attempt:0,
            link:"/quiz",
            css:"start_btn",
            btnName:"Start Quiz",
            isHidden:"",
            questionProp : [
                {
                questionId : 1,
                question : "What is the father of our nation ?",
                option1 : "Mahatma Gandhi",
                option2 : "Jawaharlal Nehru",
                option3 : "Donald Trump",
                option4 : "Barra Obama",
                answer : "Mahatma Gandhi"
                },
                {
                questionId : 2,
                question : "What color is are the leaves ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Green"
                },
                {
                questionId : 3,
                question : "What color is the sky ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Blue"
                },
                {
                questionId : 4,
                question : "What is the capital of India ?",
                option1 : "Delhi",
                option2 : "Mumbai",
                option3 : "Kolkata",
                option4 : "Chennai",
                answer : "Delhi"
                },
                {
                questionId : 5,
                question : "What color is the fire ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Yellow"
                }
        ],
        };
    }

    handleAns=()=> {
        this.setState({questionsCorrect:this.state.questionsCorrect+1})
    }

    handleQues=()=>{
        this.setState({count:this.state.count+1})
        if(this.state.count===4){
            this.setState({isHidden:""})
        }
    }

    chgBtn=()=>{
        if(this.state.css==="start_btn"){
            this.setState({css:"show_btn",link:"/result",btnName:"Show Results",isHidden:"hidden"})
        }else if(this.state.link==="/result"){
            this.setState({css:"start_btn",link:"/",btnName:"Show Results",isHidden:"hidden"})
        }
    }


    
    render() {
        const mockFunction = 1;

        function redir(){
            window.location.href = "/";
        }

        console.log(this.btnName);
        return(
            <BrowserRouter>
                <div className="main">
                    <h1 className="title">Quizz App</h1>
                    <Routes>
                        {/* <Route path="/" exact element={} /> */}
                        <Route path="/quiz" exact element={
                            <div className="quiz">
                            <Card 
                                key={this.state.questionProp[0].questionId}
                                question={this.state.questionProp[0].question}
                                correctAnswerMarkUpdate={mockFunction}
                                attempt={mockFunction}
                                onAnsChg={this.handleAns}
                                onQuesChg={this.handleQues}
                                options={{
                                option1: this.state.questionProp[0].option1,
                                option2: this.state.questionProp[0].option2,
                                option3: this.state.questionProp[0].option3,
                                option4: this.state.questionProp[0].option4,
                                }}
                                answer={this.state.questionProp[0].answer}
                            />
                            <Card
                                key={this.state.questionProp[1].questionId}         
                                question={this.state.questionProp[1].question}
                                correctAnswerMarkUpdate={mockFunction}
                                attempt={mockFunction}
                                onAnsChg={this.handleAns}
                                onQuesChg={this.handleQues}
                                options={{
                                option1: this.state.questionProp[1].option1,
                                option2: this.state.questionProp[1].option2,
                                option3: this.state.questionProp[1].option3,
                                option4: this.state.questionProp[1].option4,
                                }}
                                answer={this.state.questionProp[1].answer}
                            />
                            <Card   
                                key={this.state.questionProp[2].questionId}
                                question={this.state.questionProp[2].question}
                                correctAnswerMarkUpdate={mockFunction}
                                attempt={mockFunction}
                                onAnsChg={this.handleAns}
                                onQuesChg={this.handleQues}
                                options={{
                                option1: this.state.questionProp[2].option1,
                                option2: this.state.questionProp[2].option2,
                                option3: this.state.questionProp[2].option3,
                                option4: this.state.questionProp[2].option4,
                                }}
                                answer={this.state.questionProp[2].answer}
                            />
                            <Card
                                key={this.state.questionProp[3].questionId}
                                question={this.state.questionProp[3].question}
                                correctAnswerMarkUpdate={mockFunction}
                                attempt={mockFunction}
                                onAnsChg={this.handleAns}
                                onQuesChg={this.handleQues}
                                options={{
                                option1: this.state.questionProp[3].option1,
                                option2: this.state.questionProp[3].option2,
                                option3: this.state.questionProp[3].option3,
                                option4: this.state.questionProp[3].option4,
                                }}
                                answer={this.state.questionProp[3].answer}
                            />
                            <Card
                                key={this.state.questionProp[4].questionId}
                                question={this.state.questionProp[4].question}
                                correctAnswerMarkUpdate={mockFunction}
                                attempt={mockFunction}
                                onAnsChg={this.handleAns}
                                onQuesChg={this.handleQues}
                                options={{
                                option1: this.state.questionProp[4].option1,
                                option2: this.state.questionProp[4].option2,
                                option3: this.state.questionProp[4].option3,
                                option4: this.state.questionProp[4].option4,
                                }}
                                answer={this.state.questionProp[4].answer}
                            />
                        </div>
                        } />

                        <Route path="/result" exact element={<div><center><div className='result'><Banner>You have answered {this.state.questionsCorrect}/5 Correctly</Banner></div>
                            <Button id="button"className={this.state.css} onClick={redir} >Start Quiz</Button></center>
                            </div>} />

                    </Routes>

                    <Link to={{
                        pathname:this.state.link,
                        state:{questionsCorrect:this.state.questionsCorrect}
                    }}><Button id="button"className={this.state.css} onClick={this.chgBtn} hidden={this.state.isHidden} >{this.state.btnName}</Button></Link>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;