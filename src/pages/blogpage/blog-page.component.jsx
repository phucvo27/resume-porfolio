import React from 'react';
import { Link } from 'react-router-dom';
import TitlePage from '../../components/TitlePage/title-page.component'

class Blog extends React.Component{

    renderArticles = ()=>{
        const sampleArticle = [1,2,3];
        return sampleArticle.map((item , idx)=>{
            return (
                <article className="article" key={idx}>
                    <header className="article__header">
                        <img src="https://moz.com/assets/images/blog/categories/580/advanced-seo.png?0aa8384" alt="post" />
                    </header>
                    <div className="article__main">
                        <div className="article__author">
                        <div className="article__author--avatar">
                            <img src="https://moz.com/img_users/155620.jpg?1552255071" alt="author-avatar" />
                        </div>
                        <span>By: Phuc Vo</span>
                        <span>October 11th, 2019</span>
                        </div>
                        <div className="article__title">
                        <Link to='/' className="article__title--text">
                            Featured Snippets: What to Know & How to Target - Whiteboard Friday
                        </Link>
                        </div>
                        <div className="article__description">
                        <p>Featured snippets are still the best way to take up primo SERP real estate, and they seem to be changing all the time. Today, Britney Muller shares the results of the latest Moz research into featured snippet trends and data, plus some fantastic tips and tricks for winning your own.</p>
                        </div>
                    </div>
                    <footer className="article__footer">
                        <div className="article__footer--read-more">
                        <Link to="/" className="btn btn--secondary">Read More..</Link>
                        </div>
                        <div className="article__footer--comment">
                        <span>Comment: </span>
                        <span>18</span>
                        </div>
                        
                    </footer>
                </article>
            )
        })
    }
    render(){
        return (
            <div className='container'>
                <TitlePage title='Blog'/>

                <section className="blogs">
                
                    { this.renderArticles()}
                </section>
            </div>
        )
    }
}


export default Blog;