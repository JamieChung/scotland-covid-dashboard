import { Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ReactGA from 'react-ga';
import App from './components/app';

export default class HomePage extends React.Component {

    componentDidMount() {
        ReactGA.initialize('UA-163866086-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <html>
                <head>
                    <title>Scotland COVID Dashboard</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <meta name="description" content="Scotland COVID Dashboard tracking daily COVID-19 cases." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                   <App /> 
                    <Container style={{ marginTop: 50, marginBottom: 50 }}>
                        <Divider variant="middle" />
                        <Typography variant="body1" style={{ textAlign: 'center', marginTop: 25 }}>
                            <ReactGA.OutboundLink eventLabel="outbound-github.com/jamiechung/scotland-covid-dashboard" target="_blank" to="https://github.com/JamieChung/scotland-covid-dashboard">
                                Contribute on GitHub
                        </ReactGA.OutboundLink>
                            <span> - Made with ❤️ in Edinburgh, Scotland - </span>
                            <ReactGA.OutboundLink eventLabel="outbound-github.com/tomwhite/covid-19-uk-data" target="_blank" to="https://github.com/tomwhite/covid-19-uk-data">
                                Data provided by Tom White
                        </ReactGA.OutboundLink>
                        </Typography>
                    </Container>
                </body>
            </html>
        );
    }
}
