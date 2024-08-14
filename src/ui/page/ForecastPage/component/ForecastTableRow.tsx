import {ListItem} from "../../../../data/OpenWeatherForecast.type.ts";
import moment from "moment";

type Props = {
    listItem: ListItem
}

export default function ForecastTableRow({listItem}: Props) {
    return (
        <tr className="align-middle">
            <td>{moment.unix(listItem.dt).format("MM/DD/YYYY")}</td>
            <td>{moment.unix(listItem.dt).format("HH:mm:ss")}</td>
            <td>{listItem.main.temp_min}/{listItem.main.temp_max}</td>
            <td>{listItem.main.humidity}</td>
            <td>
                <img
                    src={`https://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`}
                    style={{
                        backgroundColor: "transparent"
                    }}
                />
            </td>
        </tr>
    )
}