import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {
  // je créé une variable de state pour stocker
  // les coworkings à récupérer depuis l'api
  // par défaut, je mets en valeurs pour la variable
  // un tableau vide

  // la variable coworkings permet de récupérer la valeur
  // actuelle du state
  // et la fonction setCoworkings permet de modifier la valeur
  const [coworkings, setCoworkings] = useState([]);

  // je créé une fonction qui va faire un appel fetch
  // sur mon api
  const fetchCoworkings = async () => {
    // je fais un appel fetch sur mon api
    if (coworkings.length === 0) {
      const coworkingsResponse = await fetch("/coworkings.json");
      const coworkingsData = await coworkingsResponse.json();

      // si la variable coworkings est vide
      // je stocke dans la variable coworkings
      // les coworkings récupérés depuis l'api
      // ça provoque un rechargement du composant

      setCoworkings(coworkingsData);
    }
  };

  // j'appelle ma fonction fetchCoworkings
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

      {coworkingsFiltered.map((coworking) => {
        return <ShowCoworking coworking={coworking} />;
      })}
    </section>
  );
};

export default ListCoworkings;
