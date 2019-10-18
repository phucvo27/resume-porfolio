import React from 'react';
import TitlePage from '../../components/TitlePage/title-page.component';
import BlockTitle from '../../components/BlockTitle/block-title.component';

class ContactPage extends React.Component{

    handleSubmit = (e)=>{
        e.preventDefault();
    }
    render(){
        return (
            <React.Fragment>
            <div className='container'>
                <TitlePage title='Contact'/>
                <section className='contact-page'>
                    <div className='contact-page__text'>
                        <BlockTitle title='Get In Touch' />

                        <p>Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>

                    </div>
                    <div className='contact-page__form'>
                        <BlockTitle title='Contact Form' />
                        <form onSubmit={this.handleSubmit} className='form'>
                            <div className="form__group">
                                <input className="form__group--input" type="text" placeholder='Full name' />
                                <div className="form__group--line"></div>
                            </div>
                            <div className="form__group">
                                <input className="form__group--input" type="email" placeholder='Enter your email' />
                                <div className="form__group--line"></div>
                            </div>
                            <div className="form__group">
                                <input className="form__group--input" type="text" placeholder='Enter your name' />
                                <div className="form__group--line"></div>
                            </div>
                            <button type='submit' className="btn">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
            </React.Fragment>
        )
    }
}


export default ContactPage;