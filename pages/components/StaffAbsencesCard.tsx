import { Card, CardContent, CardHeader, LinearProgress } from "@material-ui/core";
import axios from 'axios';
import csvtojson from 'csvtojson';
import React from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import * as CHART_COLORS from '../../utils/chartcolors';
import * as _ from 'lodash';

export default class StaffAbsencesCard extends React.Component<{ title: string, query: any }> {

    state = {
        value: 0,
        ready: false
    }

    componentDidMount() {
        // axios.get(utilities.createbaseURLWithQuery(this.props.query))
        axios.get('https://raw.githubusercontent.com/watty62/Scot_covid19/master/data/processed/staff_absences.csv')
            .then(response => {
                csvtojson()
                    .fromString(response.data)
                    .then((json) => {
                        this.setState({ 
                            value: json , ready: true 
                        });
                    })
            })
    }

    render() {
        return (
            <Card>
                <CardHeader subheader={this.props.title} />
                {this.state.ready ?
                    <CardContent>
                        <ResponsiveContainer width='100%' height={500}>
                            <ComposedChart data={this.state.value}>
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[0]} dataKey="Nurses and Midwives" name="Nurses and Midwives" />
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[1]} dataKey="Medical and Dental" name="Medical and Dental" />
                                <Bar barSize={20} stackId="a" fill={CHART_COLORS.COLOR_PBI_DEFAULT[2]} dataKey="Other" name="Other" />
                                <Line type="monotone" dataKey="All" name="All" />
                                <Legend />
                                <Tooltip />
                                <CartesianGrid strokeDasharray="5 5" />
                                <YAxis label={{ value: 'Staff Absences', angle: -90, position: 'insideLeft' }} />
                                <XAxis
                                    dataKey="Date"
                                    allowDuplicatedCategory={false}
                                // tickFormatter={utilities.formatDateLabel}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </CardContent> :
                    <LinearProgress />}
            </Card>
        )
    }
}