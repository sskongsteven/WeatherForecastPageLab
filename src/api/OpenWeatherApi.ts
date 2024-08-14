import axios from "axios";
import {ForecastDto} from "../data/OpenWeatherForecast.type.ts";

export default class OpenWeatherApi {
    static cityId:string = "7533612";
    static apiKey:string = "ac20d857a1e067726ff2e26cc4003deb";

    static getForecastDto(handleForecastDtoResponse : (responseData: ForecastDto) => void) {
        axios.get<ForecastDto>(`http://api.openweathermap.org/data/2.5/forecast?id=${this.cityId}&appid=${this.apiKey}&units=metric`)
            .then((response) => {
                handleForecastDtoResponse(response.data);
            })
            .catch((err) =>{
                console.error(err);
            })
    }
}