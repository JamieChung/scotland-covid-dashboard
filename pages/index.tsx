import { Card, CardContent, CardHeader, Grid, Divider, Tabs, Tab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as _ from 'lodash';
import moment from 'moment';
import AreasCharts from './components/areasCharts';
import CountryCharts from './components/countryCharts';
import TopAreasTable from './components/topAreasTable';
import TopCountriesTable from './components/topCountriesTable';
import SingleKPICard from './components/singleKPICard';
import * as queries from '../utils/queries';

const HomePage = () => {

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Container>
                <Typography variant="h4">Scotland COVID-19 Dashboard</Typography>
                <Typography variant="overline" style={{ marginBottom: 25, display: 'block' }}>Updated Daily - BST/GMT</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of confirmed cases in Scotland" query={queries.QUERY_TOTAL_CONFIRMED_CASES_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of confirmed cases in Scotland" query={queries.QUERY_DAILY_CHANGE_CONFIRMED_CASES_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of tests in Scotland" query={queries.QUERY_TOTAL_TESTS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of tests in Scotland" query={queries.QUERY_DAILY_CHANGE_TESTS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Total number of deaths in Scotland" query={queries.QUERY_TOTAL_DEATHS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SingleKPICard title="Latest daily number of deaths in Scotland" query={queries.QUERY_DAILY_CHANGE_DEATHS_SCOTLAND} />
                    </Grid>
                    <Grid item xs={12}>
                        <CountryCharts />
                    </Grid>
                    <Grid item xs={12}>
                        <TopAreasTable />
                    </Grid>
                    <Grid item xs={12}>
                        <TopCountriesTable />
                    </Grid>
                    <Grid item xs={12}>
                        <AreasCharts />
                    </Grid>
                </Grid>
                <Divider variant="middle" style={{marginTop:50, marginBottom:50}} />
                <Typography variant="body1" style={{textAlign: 'center'}}>
                        Contribute on GitHub - Made with ❤️ in Edinburgh, Scotland - <a href="https://github.com/tomwhite/covid-19-uk-data">Data provided by Tom White</a>
                </Typography>
            </Container>
        </div >
    );
}

export default HomePage;
