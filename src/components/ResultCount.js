// stylesheets
import "../stylesheets/ResultCount.css"

function ResultCount({ resultCount }) {

    // takes in a number and adds a comma between every 3rd index
    const formatResultCount = (number) => {
        let str = number.toString().split(".")
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    return (
        <div>
            <h5 className="mb-3">
                {formatResultCount(resultCount)} repository results
            </h5>
            <div className="divider-line" />
        </div>
    )
}

export default ResultCount;