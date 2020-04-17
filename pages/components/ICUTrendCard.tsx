import React from "react";
import { Card, CardHeader, LinearProgress, CardContent, Typography } from "@material-ui/core"
import axios from 'axios';
import numeral from 'numeral';
import * as utilities from '../../utils/utilities';
import * as _ from 'lodash';
import csvtojson from 'csvtojson';
import { ResponsiveContainer, Brush, LineChart, Line, Legend, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import * as CHART_COLORS from '../../utils/chartcolors';

export default class ICUTrendCard extends React.Component<{ title: string, query: any }> {

    state = {
        value: 0,
        ready: false
    }

    componentDidMount() {
        // axios.get(utilities.createbaseURLWithQuery(this.props.query))
        axios.get('https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/intensive_care.csv')
            .then(response => {
                csvtojson({
                    colParser: {
                        "date": "string",
                        "icu_patients": "number"
                    }
                    , checkType: true
                })
                    .fromString(response.data)
                    .then((json) => {
                        this.setState({ value: json, ready: true });
                    })
            })
    }

    render() {
        return (
            <Card>
                <CardHeader subheader={this.props.title} />
                {this.state.ready ?
                    <CardContent>
                        <ResponsiveContainer width='100%' height={350}>
                            <LineChart data={this.state.value}>
                                <Line type="monotone" fill={CHART_COLORS.COLOR_PBI_DEFAULT[0]} dataKey="icu_patients" name="ICU Patients" />
                                <Legend />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="5 5" />
                                <Brush dataKey="date" height={30} stroke="#8884d8" />
                                <YAxis />
                                <XAxis
                                    dataKey="date"
                                // allowDuplicatedCategory={false}
                                // tickFormatter={utilities.formatDateLabel}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent> :
                    <LinearProgress />}
            </Card>
        )
    }
}