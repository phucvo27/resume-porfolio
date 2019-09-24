import React from 'react';
import { Link } from 'react-router-dom';

const avatar = 'https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/images/my_photo.png'
const SideNav = ()=>{
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
                        <Link to="" className="navigation__link">Home</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">About</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Resume</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Porfolio</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Blog</Link></li>
                    <li className="navigation__item">
                        <Link to="" className="navigation__link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default SideNav;