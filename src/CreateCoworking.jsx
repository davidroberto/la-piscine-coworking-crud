import { useState } from "react";

const CreateCoworking = () => {
  // on créer trois states pour stocker les valeurs des inputs
  // avec pour valeur par défaut une chaine de caractères vide
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // on utilise les fonctions qui permettent de modifier
    // les valeurs des states title, description et address
    // en leur passant en paramètre la valeur des inputs

    // le composant est donc rechargée (re-rendu)
    // et a accès aux nouvelles valeurs des states
    setTitle(event.target.title.value);
    setDescription(event.target.description.value);
    setAddress(event.target.address.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input type="text" name="title" />

        <label>Description</label>
        <textarea name="description" cols="30" rows="10"></textarea>

        <label>Adresse</label>
        <input type="text" name="address" />

        <button type="submit">Créer</button>
      </form>

      {/* 
		on affiche les valeurs des states : au premier chargement  
		c'est vide. Quand on soumet le formulaire, les valeurs des
		states sont mises à jour et le composant est rechargé
		Les nouvelles valeurs sont donc affichées
	*/}
      <p>Vos infos : </p>
      <p>Titre : {title}</p>
      <p>Description : {description}</p>
      <p>Adresse : {address}</p>
    </div>
  );
};

export default CreateCoworking;
