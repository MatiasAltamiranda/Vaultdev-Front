import "./loader.css"

const Loader = () => {
    return (
        <>
            <button className="btn btn-loader" type="button" disabled>
                <span className="loader spinner-border spinner-border-sm fs-3 " aria-hidden="true"></span>
                <span className="fs-3 fw-bold mx-3" role="status">Cargando ...</span>
            </button>
        </>
    )
}

export default Loader;