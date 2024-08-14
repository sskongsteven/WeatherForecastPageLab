import {Table} from "react-bootstrap";
import ForecastTableRow from "./ForecastTableRow.tsx";
import {ForecastDto} from "../../../../data/OpenWeatherForecast.type.ts";

type Props = {
    forecastDto: ForecastDto
}

export default function ForecastTable({forecastDto}: Props) {
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
                forecastDto.list.map((value) => (
                    <ForecastTableRow key={value.dt} listItem={value}/>
                ))
            }
            </tbody>
        </Table>
    )
}