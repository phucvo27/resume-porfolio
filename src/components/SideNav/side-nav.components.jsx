import React from 'react';
import avatar from '../../assets/user-avatar.jpg';
//import jsLogo from '../../assets/js-logo.jpg'


class SideNav extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isRunningAnimate : false
        }
    }
    componentDidMount(){
        const firstPage = document.querySelector('.navigation__link.active');
        this.handleRotate(firstPage.innerHTML.toLowerCase(), null, firstPage.parentElement);
        document.querySelectorAll('.page').forEach(el => {
            el.addEventListener('animationend', this.handleRemoveClass)
        })
    }
    
    componentWillUnmount(){
        document.querySelectorAll('.page').forEach(el => {
            el.removeEventListener('animationend', this.handleRemoveClass)
        })
    }

    handleRotate = (page, e = null ,parentElement)=>{
        
        if(!this.state.isRunningAnimate){
            e && e.stopPropagation()
            const theParentNode = e ? e.target.parentElement : parentElement;

            // update state active of menu
            const listNavigationItems = document.querySelectorAll('.navigation__item');
            for(let i = 0; i < listNavigationItems.length; i++){
                listNavigationItems[i].classList.remove('active')
            }
            theParentNode.classList.add('active');
            // handle animation :
            const currentActive = document.querySelector('.page.active');
            const nextActive = document.querySelector(`.${page}`);

            currentActive.classList.add('fadeOutLeftAnimate');
            nextActive.classList.add('page--back','fadeInRightAnimate');
            //e && this.setState(()=>({isRunningAnimate: true}))
            this.setState(()=>({isRunningAnimate: true}))
        }
        
    }
    handleRemoveClass = (e)=>{
        if(e.target.classList.value.includes('fadeOutLeftAnimate')){
            e.target.classList.remove('fadeOutLeftAnimate', 'active','page--front')
        }
        if(e.target.classList.value.includes('fadeInRightAnimate')){
            e.target.classList.add('active');
            e.target.classList.remove('fadeInRightAnimate','page--back')
            
        }
        this.setState(()=>({isRunningAnimate: false}))
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
                            <p disabled={true} onClick={(e)=>{ this.handleRotate('home', e) }} className="navigation__link active">Home</p></li>
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

/*
<li className="navigation__item active">
    <p onClick={(e)=>{ this.handleRotate('blog', e) }} className="navigation__link">Blog</p></li>
<li className="navigation__item">
    <p onClick={(e)=>{ this.handleRotate('contact', e) }} className="navigation__link">Contact</p></li>

*/