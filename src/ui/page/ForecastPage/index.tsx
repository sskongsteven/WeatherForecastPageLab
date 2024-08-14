import {Component} from "react";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastTable from "./component/ForecastTable.tsx";
import ForecastHeader from "./component/ForecastHeader.tsx";
import "./style.css";
import {ForecastDto} from "../../../data/OpenWeatherForecast.type.ts";
import moment from "moment";
import OpenWeatherApi from "../../../api/OpenWeatherApi.ts";
import ForecastTableLoading from "./component/ForecastTableLoading.tsx";

type Props = {}

type State = {
    updatedTime: string,
    forecastDto: ForecastDto
}

export default class ForecastPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            updatedTime: "abc",
            forecastDto: undefined
        }
    }

    componentDidMount() {
        OpenWeatherApi.getForecastDto(this.handleForecastDtoResponse);
    }

    handleForecastDtoResponse = (responseData: ForecastDto) => {
        this.setState({
            updatedTime: moment().format("MM/DD/YYYY HH:mm:ss"),
            forecastDto: responseData
        })
    }

    handleRefresh = () => {
        this.setState({
            updatedTime: "abc",
            forecastDto: undefined
        })
        OpenWeatherApi.getForecastDto(this.handleForecastDtoResponse);
    }

    render() {
        return (
            <Container>
                <ForecastHeader updatedTime={this.state.updatedTime} handleRefresh={this.handleRefresh}/>
                {
                    this.state.forecastDto
                        ? <ForecastTable forecastDto={this.state.forecastDto}/>
                        : <ForecastTableLoading/>
                }
            </Container>
        )
    }
}