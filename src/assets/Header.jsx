import logo from "../assets/logo.png"

export default function Header() {
  return ( <>
    <header className="row">
    <div className="row">

      <div className="col-2 col-lg-1">
        <img src={logo} alt="picture of a stylized pokeball"/> 
      </div> 

      <div className="col-1 col-lg-1">
        <h1 className="display-4 text-light">
          Pokédex
        </h1> 
      </div>

    </div>
    </header>
  </>
    
  );
}
