import Records from "../json-file/animal-data.json";

function Cardsection() {
    return(
        <div class="row">
            <div class="col-sm-12">
              <h1>Animals</h1>
             </div>
                {
        Records && Records.sort((a,b) => a.name > b.name ? 1 : -1).map((item) => {
           return (
            <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="card-container tooltip" key={item.id}>
                <img src={item.cardimage} class="card_img" alt={item.altimagename} />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span class="tooltiptext">{item.description}</span>
                </div>
                </div>
          )
        }
        )
    }
        </div>
    );
}

export default Cardsection;