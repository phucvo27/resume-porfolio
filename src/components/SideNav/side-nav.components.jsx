import React from 'react';
//import { Link } from 'react-router-dom';

const avatar = 'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/my_photo.png'
class SideNav extends React.Component{

    handleRotate = (page)=>{
        const subpage = document.querySelector('.subpage');
        if(subpage){
            switch(page){
                case 'home':
                    subpage.style.transform = 'rotateY(0deg)';
                    return;
                case 'about':
                    subpage.style.transform = 'rotateY(90deg)';
                    return
                case 'resume':
                    subpage.style.transform = 'rotateY(-90deg)';
                    return;
                case 'porfolio':
                    subpage.style.transform = 'rotateY(180deg)';
                    return 
                case 'blog':
                    subpage.style.transform = 'rotateX(90deg)';
                    return
                case 'contact':
                    subpage.style.transform = 'rotateX(-90deg)';
                    return
                default:
                    return
            }
        }
    }
    render(){
        return (
            <header>
                <div className="user__avatar">
                    <img src={avatar} alt=""/>
                </div>
                <div className="user__infor">
                    <h3 className="heading-1">Phuc Vo</h3>
                    <p className="description-1">Full Stack Developer</p>
                </div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation__item active">
                            <p onClick={()=>{ this.handleRotate('home') }} className="navigation__link">Home</p></li>
                        <li className="navigation__item">
                            <p onClick={()=>{ this.handleRotate('about') }} className="navigation__link">About</p></li>
                        <li className="navigation__item">
                            <p onClick={()=>{ this.handleRotate('resume') }} className="navigation__link">Resume</p></li>
                        <li className="navigation__item">
                            <p onClick={()=>{ this.handleRotate('porfolio') }} className="navigation__link">Porfolio</p></li>
                        <li className="navigation__item">
                            <p onClick={()=>{ this.handleRotate('blog') }} className="navigation__link">Blog</p></li>
                        <li className="navigation__item">
                            <p onClick={()=>{ this.handleRotate('contact') }} className="navigation__link">Contact</p></li>
                    </ul>
                </nav>
            </header>
        )
    }
    
}

export default SideNav;