import React, {Fragment} from 'react';
import { Button } from "@chakra-ui/core";
import { Spinner } from 'react-bootstrap';
import { execRegistration } from "..\\services\\RegisterService";
import StartServerComponent from './StartServerComponent';

export default function RegistrationComponent() {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [failure, setFailure] = React.useState(false);

    const handleClick = async () => {
        setLoading(true);
        const result = await execRegistration();
        
        if (result.success = true) {
            setLoading(false);
            setSuccess(true);
        } else {
            setFailure(true);
            setLoading(false);
        }
    }


    return (
        <Fragment>
            {!loading && !success && !failure && (
                <Button 
                    variantColor="green" 
                    style={{border: 'none', fontWeight: 300, marginTop: 30}}
                    onClick={handleClick}>
                        Register Bridge
                </Button>
            )}

            {loading && (
                <div className="spinner-container">
                    <Spinner animation="border" variant="warning" style={{marginTop: 30}}/>
                    <p className="loading-message">
                        Press the Link button on your Hue Bridge.
                    </p>
                </div>
            )}

            {success && (
                <Fragment>
                    <StartServerComponent/>
                </Fragment>
            )}

            {failure && (
                <h1 className="failure-message">
                    Failure.
                </h1>
            )}
        </Fragment>
    );

}