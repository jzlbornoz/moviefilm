import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../style/components/LoginButton.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="LoginButton">
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}

export { LoginButton };