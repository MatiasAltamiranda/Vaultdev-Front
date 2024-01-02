import "./search.css";


const Search = () => {
    return (
        <>
            <section className="container-fluid search">
                <div className="row">
                    <div className="col-12 search-content">
                        <h2 className="search-title">Que palabra estas buscando?</h2>
                        <input
                        className="search-input"
                        type="text"
                        placeholder="Ingrese una palabra"
                        minLength="2"
                        maxLength="100"/>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Search;
