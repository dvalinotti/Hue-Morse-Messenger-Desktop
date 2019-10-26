import React, {Fragment} from 'react';
import { Button } from "@chakra-ui/core";
import { startServer } from "..\\services\\StartService";

export default function StartServerComponent() {
    const [loading, setLoading] = React.useState(false);
    const [started, setStarted] = React.useState(false);

    const handleClick = () => {
        setLoading(true);
        const response = startServer();
        let time = Math.random() * Math.floor(7) + 3
        sleep(5000).then(() => {
            setLoading(false);
            setStarted(true);
        });
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    return (
        <Fragment>
            {!started && !loading && (
                <Fragment> 
                    <h1 className="success-message">
                        Success!
                    </h1>
                    <Button
                        variantColor="yellow" 
                        style={{border: 'none', fontWeight: 300, marginTop: 30}}
                        onClick={handleClick}>
                            Start Server
                    </Button>
                </Fragment>
            )}

            {loading && !started && (
                <p className="loading-message">
                    Starting server...
                </p>
            )}
    
            {started && !loading && (
                <p className="running-message">
                    Server running.
                </p>
            )}
        </Fragment>
    )
}