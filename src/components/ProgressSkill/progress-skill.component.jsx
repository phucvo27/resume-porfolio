import React from 'react';

class ProgressSkill extends React.Component{

    componentDidMount(){
        const progress = document.querySelector('.progress');
        progress.style.setProperty('--width-end',this.props.percent)
    }

    render(){
        const { title, percent } = this.props;
        return(
            <div className='progress__box'>
                <h3 className='progress__box--title'>{title.toUpperCase()}</h3>
                <div className="progress__container">
                    <div className="progress" style={{width: percent }}></div>
                </div>
            </div>
        )
    }
}

export default ProgressSkill;