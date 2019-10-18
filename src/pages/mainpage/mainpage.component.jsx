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
                    <div className="subpages">
                        <section className="page home active">
                            <HomePage />
                        </section>
                        <section className="page about">
                            <AboutPage />
                        </section>
                        <section className="page resume">
                            <ResumePage />
                        </section>
                        <section className="page porfolio">
                            <PorfolioPage />
                        </section>
                        <section className="page blog">
                            <BlogPage />
                        </section>
                        <section className="page contact">
                            <ContactPage />
                        </section>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainPage;