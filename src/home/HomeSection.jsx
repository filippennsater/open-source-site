import React from 'react';
import '../App.css';
import './HomeSection.scss';


function HomeSection() {


    return (
    <div className='full-screen-container'>
         <div className='OP-header'>
            Open Source Software Requirements
         </div>
         <div className='OP-text'>
         <ol>
            <li><strong>Permitted Use:</strong> You are allowed to use, modify, and distribute the code in this project for any non-commercial purposes.</li>
            <li><strong>Commercial Use:</strong>
                <ul>
                    <li>You cannot sell the code for personal gain.</li>
                    <li>If the code or any derivative works are used in a product that is sold, that product must also be made open source.</li>
                    <li>Any profits made from selling the code or derivative works must be given to the original author.</li>
                </ul>
            </li>
            <li><strong>Image Use:</strong> The images included in this project cannot be used in any other projects or distributions.</li>
            <li><strong>Personal Accounts:</strong> Any code that connects to my personal accounts is not permitted for use in any other projects.</li>
        </ol>
        <p>By using this code, you agree to these terms.</p>
         </div>
    </div>
    )
}

export default HomeSection