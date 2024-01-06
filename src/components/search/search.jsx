import {  useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";



const Search = () => {

const navigate = useNavigate()
const [search,setSearch] = useState("")
const [error,setError] = useState("")


const handleChange = (e) =>
{
    setSearch(e.target.value)
}

const handleBlur =(e)=>{
  if(e.target.value === ""){
    setError("El campo no puede enviarse vacio")
  }else if(e.target.value.length === 1){
    setError("El campo debe contener al menos 2 caracteres")
  }
  else{
    setError("")
  }
}

const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/concept/search/${search}`)
}

    return (
        <>
            <section className="container-fluid search">
                <div className="row">
                    <form onSubmit={handleSubmit} className="col-12 search-content">
                        <h2 className="search-title">Que palabra estas buscando?</h2>
                        <input
                        className="search-input"
                        type="text"
                        placeholder="Ingrese una palabra"
                        value={search}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        minLength="2"
                        maxLength="100"/>
                    </form>
                </div>
                { setError && <p className="fs-2 text-center text-danger mt-5">{error}</p>}
            </section>
        </>
    )
}


export default Search;
