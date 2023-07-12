import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
  const [coworkings, setCoworkings] = useState([]);

  const fetchCoworkings = async () => {
    if (coworkings.length === 0) {
      // faux temps de réponse de l'api
      setTimeout(async () => {
        const coworkingsResponse = await fetch("/coworkings.json");
        const coworkingsData = await coworkingsResponse.json();

        setCoworkings(coworkingsData);
      }, 1500);
    }
  };

  fetchCoworkings();

  const [city, setCity] = useState("Bordeaux");

  const handleClick = (value) => {
    setCity(value);
  };

  const coworkingsFiltered = coworkings.filter((coworking) => {
    if (city === null) {
      return true;
    }

    return coworking.address === city;
  });

  return (
    <section>
      <h2>Liste des coworkings</h2>

      <button onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
      <button onClick={() => handleClick("Merignac")}>Mérignac</button>
      <button onClick={() => handleClick("Lormont")}>Lormont</button>
      <button onClick={() => handleClick("Eysines")}>Eysines</button>

      <button onClick={() => handleClick(null)}>Tous</button>

      {coworkingsFiltered.length === 0 ? (
        <p>en cours de chargement...</p>
      ) : (
        <>
          {coworkingsFiltered.map((coworking) => {
            return <ShowCoworking coworking={coworking} />;
          })}
        </>
      )}
    </section>
  );
};

export default ListCoworkings;
