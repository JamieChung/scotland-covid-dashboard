import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as queries from '../../utils/queries';
import AreasCharts from '../components/areasCharts';
import CountryCharts from '../components/countryCharts';
import SingleKPICard from '../components/singleKPICard';
import TopAreasTable from '../components/topAreasTable';
import TopCountriesTable from '../components/topCountriesTable';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SingleTrendCard from './singleTrendCard';
import StaffAbsencesCard from './StaffAbsencesCard';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export function areaExpansions() {

    const classes = {
        heading: {
            flexBasis: '33.33%',
            flexShrink: 0
        }
    };

    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Areas #1</Typography>
                    <Typography>Descripton of Area #1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Details of area 1</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary>
                    <Typography>Areas #2</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    )
}

export default class App extends React.Component {

    render() {
        return (
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
                        {areaExpansions()}
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
                    <Grid item xs={12}>
                        <SingleTrendCard title="ICU" query="2141" />
                    </Grid>
                    <Grid item xs={12}>
                        <StaffAbsencesCard title="Staff Absences" query="2141" />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}