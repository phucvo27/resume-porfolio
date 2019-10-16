import React from 'react';
import TitlePage from '../../components/TitlePage/title-page.component'

class HomePage extends React.Component{

    render(){
        return (
            <div className='content'>
                <TitlePage title='Home'/>
            </div>
        )
    }
}


export default HomePage;