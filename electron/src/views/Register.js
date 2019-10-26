import React from 'react';
import RegistrationComponent from '../components/RegistrationComponent';

export default function Register() {
    return (
        <div className="App-window">
            <h1 className="app-title">Hue Morse Messenger</h1>
            <h3 className="app-subtitle">Server</h3>
            <RegistrationComponent />
        </div>
    )
}