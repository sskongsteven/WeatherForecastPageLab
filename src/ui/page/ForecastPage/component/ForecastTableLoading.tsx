import {Placeholder, Table} from "react-bootstrap";

export default function ForecastTableLoading() {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature (Min/Max)</th>
                <th>Humidity (%)</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody>
            {
                Array.from({length: 40}).map(() => (
                    <tr className="align-middle">
                        <td><Placeholder xs={12} size="lg"/></td>
                        <td><Placeholder xs={12} size="lg"/></td>
                        <td><Placeholder xs={12} size="lg"/></td>
                        <td><Placeholder xs={12} size="lg"/></td>
                        <td><Placeholder xs={12} size="lg"/></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}