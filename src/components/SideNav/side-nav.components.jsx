import React from 'react';
import avatar from '../../assets/user-avatar.jpg';
//import jsLogo from '../../assets/js-logo.jpg'


class SideNav extends React.Component{

    componentDidMount(){
        const firstPage = document.querySelector('.navigation__link.active');
        this.handleRotate(firstPage.innerHTML.toLowerCase(), null, firstPage.parentElement);
    }
    handleRotate = (page, e = null ,parentElement)=>{
        e && e.stopPropagation()
        const theParentNode = e ? e.target.parentElement : parentElement ;
        const subpage = document.querySelector('.subpage');
        const listFaces = document.querySelectorAll('.face');
        const listNavigationItems = document.querySelectorAll('.navigation__item');
        for(let i = 0; i < listFaces.length; i++){
            listFaces[i].classList.remove('active');
            // we can do like this , because our page also has 6 navigation__item 
            listNavigationItems[i].classList.remove('active')
        }
        theParentNode && theParentNode.classList.add('active');
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

    render(){
        return (
            <header className='header'>
                <div className="user__avatar">
                    <img src={avatar} alt="user-avatar"/>
                </div>
                <div className="user__infor">
                    <h3 className="heading-1">Phuc Vo</h3>
                    <p className="description-1">Full Stack Developer</p>
                </div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('home', e) }} className="navigation__link">Home</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('about', e) }} className="navigation__link">About</p></li>
                        <li className="navigation__item active">
                            <p onClick={(e)=>{ this.handleRotate('resume', e) }} className="navigation__link active">Resume</p></li>
                        <li className="navigation__item">
                            <p onClick={(e)=>{ this.handleRotate('porfolio', e) }} className="navigation__link">Porfolio</p></li>
                        <li className="navigation__item active">
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