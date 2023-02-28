import '../../../index.css';
import Button from '../Button/Button'
import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisable:false
        }
    }
    correctAnswerMarkUpdate=(e,value)=> {
            if(this.props.answer===value)
            {
                this.props.onAnsChg()
            }
            this.setState({isDisable:true})
            this.props.onQuesChg()
        }
    render() {
        return (

            <div className="card">
                <div className="main">
                    <h4 className='question'>{this.props.question}</h4>
                </div>
                <div className="main">
                    <div className="options">
                        <Button className="btn" onClick={e=>this.correctAnswerMarkUpdate(e,this.props.options.option1)} disabled={this.state.isDisable} >{this.props.options.option1}</Button>
                        <Button className="btn" onClick={e=>this.correctAnswerMarkUpdate(e,this.props.options.option2)} disabled={this.state.isDisable}>{this.props.options.option2}</Button>
                        <Button className="btn" onClick={e=>this.correctAnswerMarkUpdate(e,this.props.options.option3)} disabled={this.state.isDisable}>{this.props.options.option3}</Button>
                        <Button className="btn" onClick={e=>this.correctAnswerMarkUpdate(e,this.props.options.option4)} disabled={this.state.isDisable}>{this.props.options.option4}</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;