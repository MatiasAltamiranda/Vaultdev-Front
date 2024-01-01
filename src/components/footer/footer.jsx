import "./footer.css"

const Footer = () =>{
    return(
        <>
            <footer className="container-fluid">
                <div className="row">
                <section className="logo text-center col-12 col-sm-6 ">
                    <h3 className="logo_title">Vault<span>{"<Dev/>"}</span></h3>
                    <p className="logo_subtitle">Conocimiento sin fronteras</p>
                </section>
                <section className="paragraph text-center col-12 col-sm-6">
                   <p>El aprendisaje es un <span>superpoder</span></p>
                   <p>Con él, puedes <span>cambiar</span> tu <span>mundo</span></p>
                </section>
                </div>
            </footer>
        </>
    )
}

export default Footer;