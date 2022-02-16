import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Wheather from "./Weather";

const Country = () => {
  // const [query, setQuery] = useState<any>([]);
  const [countries, setCountries] = useState<any>([]);
  const [label, setLabel] = useState<any>();
  useEffect(() => {
  }, [countries]);

  const url = `https://restcountries.com/v3.1/name/${label}`;

  const getData = async () => {
    const result: any = await Axios.get(url);
    const data = result.data;
console.log(label)
    setCountries(result.data);

  };

  // const onChange = (e: any) => {
  //   setQuery(e.target.value);
  // };
  const onClick =  (e: any) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="App">
      <h1> Search The Country </h1>
      <form className="search-form" onSubmit={onSubmit}>
      <select className="app-select" onChange={onClick}>
        <option>Select Country</option>
          <option >India</option>
          <option >America</option>
          <option>Japan</option>
          <option >Afghanistan</option>
0          <option >Africa</option>
        </select>

        <input type="submit" value="search" />
     
      </form>

      <div>
        {countries && countries.length > 0 ? (
          countries.map((data: any) => {
            return (
              <div className="country" key={uuidv4()}>
                <h2>Name:{data.name.common}</h2>
                <h2>Capital:{data.capital}</h2>

                <h2>population :{data.population}</h2>
                <h2>continents :{data["continents"][0]}</h2>
                <img src={data.flags.png} alt={data.name.common} />
                <h2>languages :{data.languages.hin}</h2>
                <h2>Lating :{data["capitalInfo"]["latlng"][0]},{data["capitalInfo"]["latlng"][1]}</h2>
                <h2>Map : <a href={data.maps.googleMaps} target="_blank" rel='noopener noreferrer'>Click Here</a></h2>
                <br /><br />
                <Wheather query={label} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Country;
