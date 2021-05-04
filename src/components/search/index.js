import React from "react";

import imgSearch from '../../assets/search.png';

import './search.scss';



    const productName = [
        "Bicicleta",
        "Pia",
        "Cadeira Gamer",
        "Torneira"
       
      ];
      
      function Search() {
       const [searchTerm, setSearchTerm] = React.useState("");
       const [searchResults, setSearchResults] = React.useState([]);
       const handleChange = event => {
          setSearchTerm(event.target.value);
        };
       React.useEffect(() => {
          const results = productName.filter(product =>
            product.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results);
        }, [searchTerm]);
      
        return (
          <div className="search">
            <input
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleChange}
            />
            <img src={imgSearch} alt={"search"} />
            <ul>
               {searchResults.map(item => (
                <li className="item">{item}</li>
              ))}
            </ul>
          </div>
        );
      }



export default Search;
