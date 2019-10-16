import React from 'react';
import TitlePage from '../../components/TitlePage/title-page.component'
import BlockTitle from '../../components/BlockTitle/block-title.component'
import ProgressSkill from '../../components/ProgressSkill/progress-skill.component';

class ResumePage extends React.Component{

    render(){
        return (
            <>
                <TitlePage title='Resume'/>
                <section className='resume-page'>
                    <div className='resume__education'>
                        <BlockTitle title='Education'/>
                        <div className='timeline'>
                            <div className='event'>
                                <div className='event__title'>
                                    <h5 className='event__title--text'>2018</h5>
                                </div>
                                <div className='event__body'>
                                    <h3 className='event__body--title'>Special Course</h3>
                                    <h6 className='description-1 event__body--description'>React Nanodegree</h6>
                                    <p className='event__body--content'>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                            </div>

                            <div className='event'>
                                <div className='event__title'>
                                    <h5 className='event__title--text'>2019</h5>
                                </div>
                                <div className='event__body'>
                                    <h3 className='event__body--title'>Special Course</h3>
                                    <h6 className='description-1 event__body--description'>MongoDB University</h6>
                                    <p className='event__body--content'>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='resume__experience'>
                        <BlockTitle title='Experience'/>
                        <div className='timeline'>
                            <div className='event'>
                                <div className='event__title'>
                                    <h5 className='event__title--text'>2018</h5>
                                </div>
                                <div className='event__body'>
                                    <h3 className='event__body--title'>Special Course</h3>
                                    <h6 className='description-1 event__body--description'>React Nanodegree</h6>
                                    <p className='event__body--content'>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                            </div>

                            <div className='event'>
                                <div className='event__title'>
                                    <h5 className='event__title--text'>2019</h5>
                                </div>
                                <div className='event__body'>
                                    <h3 className='event__body--title'>Special Course</h3>
                                    <h6 className='description-1 event__body--description'>MongoDB University</h6>
                                    <p className='event__body--content'>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='resume__coding'>
                        <BlockTitle title='Coding Skills'/>
                        <ProgressSkill title='html' percent='90%'/>
                        <ProgressSkill title='css' percent='80%'/>
                        <ProgressSkill title='js' percent='95%'/>
                        <ProgressSkill title='ReactJS' percent='100%'/>
                        <ProgressSkill title='NodeJS' percent='100%'/>
                    </div>
                </section>
            </>
        )
    }
}


export default ResumePage;