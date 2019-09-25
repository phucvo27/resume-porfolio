import React from 'react';
import HomePage from '../homepage/homepage.component';
import BlogPage from '../blogpage/blog-page.component'
import ResumePage from '../resumepage/resumepage.component';
import PorfolioPage from '../porfoliopage/porfolio-page.component';
import ContactPage from '../contact-page/contact-page.component';
import AboutPage from '../aboutpage/aboutpage.component';

class MainPage extends React.Component{

    render(){
        return (
            <main className="main">
                <div className="wrapper">
                    <div className="subpage">
                        <section className="face front home">
                            <HomePage />
                        </section>
                        <section className="face left about">
                            <AboutPage />
                        </section>
                        <section className="face right resume">
                            <ResumePage />
                        </section>
                        <section className="face back porfolio">
                            <PorfolioPage />
                        </section>
                        <section className="face top blog">
                            <BlogPage />
                        </section>
                        <section className="face bottom contact">
                            <ContactPage />
                        </section>
                    </div>
                </div>
            </main>
        )
    }
}


export default MainPage;