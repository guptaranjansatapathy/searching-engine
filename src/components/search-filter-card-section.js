import Records from "../json-file/animal-data.json";

function Searchfilter({query}) {
    return(<>
        <div className="row">
        <div className="col-lg-12 col-md-12">
            <h1 className="margin-bottom">Searched items</h1>
        </div>
    </div>
        <div class="row">
                {
        Records && Records.filter(Records => Records.name.toLowerCase().includes(query)).map((item) => {
           return (<>
            <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="card-container tooltip" key={item.id}>
            <img src={item.cardimage} class="card_img" alt={item.altimagename}/>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span class="tooltiptext">{item.description}</span>
                </div>
                </div></>
          )
        }
        )
    }
        </div></>
    );
}

export default Searchfilter;

