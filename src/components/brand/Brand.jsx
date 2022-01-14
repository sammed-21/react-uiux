import React from 'react'
import './brand.css'

 
import slack from '../../assets/slack.png';
import dropbox from '../../assets/dropbox.png';
// import shopify   from '../../assets/shopify   .png';
import google from '../../assets/google.png'; 
import atlassian from '../../assets/atlassian.png'; 
import { Possibility } from '../../container';
// import  '../../components/brand';
// import {google, dropbox
//     ,slack
    
//         } from '../../components/brand/imports';
const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="Google" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div> 
            <div>
                <img src={atlassian} alt="atlassian" />
            </div> 
            {/* <div>
                <img src={shopify} alt="atlassian" />
            </div> 
             */}
         
       
        </div>
    )
} 

export default Brand
