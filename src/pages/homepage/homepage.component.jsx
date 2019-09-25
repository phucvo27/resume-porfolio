import React from 'react';
import TitlePage from '../../components/TitlePage/title-page.component'

class HomePage extends React.Component{

    render(){
        return (
            <div className='container'>
                <TitlePage title='Home'/>
            </div>
        )
    }
}


export default HomePage;