import React from 'react';
import Graduation from '../img/graduation.jpg'
import BottomBar from './BottomBar'
import Layout from './Layout';

export default function landingPage() {
    return (

        <>
        <Layout>
        <div id="landingpage-cont">
            
            <div id="landingpage-message">
                    <div className="big-words"><h1>REGISTER NOW TO GET ACCESS TO PROFFESSIONAL ESSAY WRITERS.</h1></div>
                    <div className="small-words"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum blanditiis quos illum? Blanditiis, ipsa temporibus consequatur iste autem aliquid facere quasi voluptate animi eaque. Neque recusandae eligendi commodi corrupti.</p></div>
            </div>
            <div id="landingpage-image">
                <img src={Graduation} alt="Graduation"></img>
            </div>
        </div>
        </Layout>
        <BottomBar></BottomBar>
        </>
    )
}
