type Props = {
    updatedTime: string
    handleRefresh: () => void
}

export default function ForecastHeader({updatedTime, handleRefresh}: Props) {
    return (
        <div>
            <div className="d-flex justify-content-between mt-3">
                <h1 className="text-white">
                    5 Day / 3 Hour Forecast
                </h1>
                <div className="d-flex">
                    <div className="text-white text-end me-2">
                        Last Update Time:<br/>
                        {updatedTime}
                    </div>
                    <div id="refresh-btn" onClick={handleRefresh}>

                    </div>
                </div>
            </div>
            <h2 className="text-white fw-light fst-italic">Hong Kong</h2>
        </div>
    )
}