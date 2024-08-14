export interface ForecastDto {
    list:    ListItem[];
}

export interface ListItem {
    dt:         number;
    main:       MainData;
    weather:    Weather[];
}


export interface MainData {
    temp:       number;
    temp_min:   number;
    temp_max:   number;
    humidity:   number;
}

export interface Weather {
    icon: string;
}