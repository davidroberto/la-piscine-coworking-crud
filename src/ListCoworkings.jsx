import { useState } from "react";

const ListCoworkings = () => {
  const coworkings = [
    {
      id: 1,
      name: "Coworking 1",
      address: "Bordeaux",
      phone: "123456789",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Coworking 2",
      address: "Merignac",
      phone: "123456789",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Coworking 3",
      address: "Bordeaux",
      phone: "123456789",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Coworking 4",
      address: "Eysines",
      phone: "123456789",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      name: "Coworking 5",
      address: "Lormont",
      phone: "123456789",
      img: "https://picsum.photos/200/300",
    },
  ];

  // on a ajouté un bouton sous chaque coworking pour le supprimer
  // au click sur le bouton, on récupère l'id du coworking cliqué
  // on fait un appel fetch pour supprimer le coworking

  const [city, setCity] = useState("Bordeaux");

  const handleClick = (value) => {
    setCity(value);
  };

  const handleDelete = (id) => {
    console.log("coworking supprimé", id);
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
        return (
          <article key={coworking.id}>
            <h3>{coworking.name}</h3>
            <p>{coworking.address}</p>
            <p>{coworking.phone}</p>
            <img src={coworking.img} alt={coworking.name} />
            <button onClick={() => handleDelete(coworking.id)}>Supprimer le coworking</button>
          </article>
        );
      })}
    </section>
  );
};

export default ListCoworkings;
