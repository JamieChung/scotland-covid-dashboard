import React from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress } from "@material-ui/core";
import axios from 'axios';
import * as _ from 'lodash';
import numeral from 'numeral';

const query = `
SELECT
  Area,
  CAST(COALESCE(TotalCases, 0) AS Integer) AS TotalCases,
  Date
FROM
  cases
WHERE
  Country = 'Scotland'
  AND Date = (
    SELECT
      MAX(Date)
    FROM
      cases
  )
ORDER BY
  TotalCases DESC
`;

function createBaseWithDB(db: string): string {
    return 'https://covid-19-uk-datasette-65tzkjlxkq-ew.a.run.app/' + db + '.json';
}

const baseURL = createBaseWithDB('covid-19-uk') + '?sql=' + encodeURIComponent(query);

export default class TopAreasTable extends React.Component {

    state = {
        data: [],
        loading: true
    }

    componentDidMount() {

        axios.get(baseURL)
            .then(response => {

                let _build_data = [];
                // hyrate array of JSON object with rows based on the columns
                _.map(response.data.rows, function (r) {
                    _build_data.push(_.mapKeys(r, function (v, k) {
                        return response.data.columns[k];
                    }))
                });

                this.setState({ data: _build_data });
                this.setState({ loading: false });
            })
    }


    render() {

        if (this.state.loading) {
            return <LinearProgress />
        }

        return (
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Area</TableCell>
                            <TableCell>Confirmed Cases</TableCell>
                            <TableCell>Last Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(row => <TableRow key={(row.Date + row.Area)}>
                            <TableCell>{row.Area}</TableCell>
                            <TableCell>{numeral(row.TotalCases).format('0,0')}</TableCell>
                            <TableCell>{row.Date}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}