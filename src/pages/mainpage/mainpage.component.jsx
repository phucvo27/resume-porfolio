import React from 'react';
import HomePage from '../homepage/homepage.component';
import BlogPage from '../blogpage/blog-page.component'
import ResumePage from '../resumepage/resumepage.component';
//import PorfolioPage from '../porfoliopage/porfolio-page.component';
//import ContactPage from '../contact-page/contact-page.component';
import AboutPage from '../aboutpage/aboutpage.component';

class MainPage extends React.Component{

    render(){
        return (
            <main className="main">
                <div className="wrapper">
                    <div className="scene">
                        <div className='cube'>
                            <section className="cube__face cube__face--front home active">
                                <HomePage />
                            </section>
                            <section className="cube__face cube__face--left about">
                                <AboutPage />
                            </section>
                            <section className="cube__face cube__face--right resume">
                                <ResumePage />
                            </section>
                            <section className="cube__face cube__face--back blog">
                                <BlogPage />
                            </section>
                            
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}


export default MainPage;
/*
<section className="cube__face cube__face--top porfolio">
    <PorfolioPage />
</section>
<section className="cube__face cube__face--bottom contact">
    <ContactPage />
</section>

*/