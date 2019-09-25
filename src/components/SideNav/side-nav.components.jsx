import React from 'react';
//import { Link } from 'react-router-dom';

const avatar = 'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/my_photo.png'

class SideNav extends React.Component{

    handleRotate = (page, e)=>{
        const subpage = document.querySelector('.subpage');
        const listFaces = document.querySelectorAll('.face');
        for(let i = 0; i < listFaces.length; i++){
            listFaces[i].classList.remove('active');
        }
        if(subpage){
            switch(page){
                case 'home':
                    subpage.style.transform = 'rotateY(0deg)';
                    document.querySelector('.home').classList.add('active')
                    return;
                case 'about':
                    subpage.style.transform = 'rotateY(90deg)';
                    document.querySelector('.about').classList.add('active')
                    return
                case 'resume':
                    subpage.style.transform = 'rotateY(-90deg)';
                    document.querySelector('.resume').classList.add('active')
                    return;
                case 'porfolio':
                    subpage.style.transform = 'rotateY(180deg)';
                    document.querySelector('.porfolio').classList.add('active')
                    return 
                case 'blog':
                    subpage.style.transform = 'rotateX(-90deg)';
                    document.querySelector('.blog').classList.add('active')
                    return
                case 'contact':
                    subpage.style.transform = 'rotateX(90deg)';
                    document.querySelector('.contact').classList.add('active')
                    return
                default:
                    return
            }
        }
    }

    handleActiveNavigationState = (e)=>{
        e.stopPropagation();
        const navigationItems = document.querySelectorAll('.navigation__item');
        for(let i = 0; i < navigationItems.length; i++){
            navigationItems[i].classList.remove('active');
        }
        this.classList.add('active')
    }
    render(){
        return (
            <header>
                <div className="user__avatar">
                    <img src={avatar} alt="user-avatar"/>
                </div>
                <div className="user__infor">
                    <h3 className="heading-1">Phuc Vo</h3>
                    <p className="description-1">Full Stack Developer</p>
                </div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation__item active">
                            <p onClick={(e)=>{ this.handleRotate('home', e) }} className="navigation__link">Home</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('about', e) }} className="navigation__link">About</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('resume', e) }} className="navigation__link">Resume</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('porfolio', e) }} className="navigation__link">Porfolio</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('blog', e) }} className="navigation__link">Blog</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('contact', e) }} className="navigation__link">Contact</p></li>
                    </ul>
                </nav>
            </header>
        )
    }
    
}

export default SideNav;