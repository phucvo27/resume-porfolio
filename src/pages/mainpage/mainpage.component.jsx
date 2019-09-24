import React from 'react';


class MainPage extends React.Component{

    render(){
        return (
            <main className="main">
                <div className="wrapper">
                    <div className="subpage">
                        <section className="face front home">
                            <p>This is Home Page</p>
                        </section>
                        <section className="face left about"></section>
                        <section className="face right resume"></section>
                        <section className="face back porfolio"></section>
                        <section className="face top blog"></section>
                        <section className="face bottom contact"></section>
                    </div>
                </div>
            </main>
        )
    }
}


export default MainPage;