import React from 'react';
import TitlePage from '../../components/TitlePage/title-page.component'

class ContactPage extends React.Component{

    render(){
        return (
            <div className='container'>
                <TitlePage title='Contact'/>
                <h2>This is Contact Page</h2>
            </div>
        )
    }
}


export default ContactPage;