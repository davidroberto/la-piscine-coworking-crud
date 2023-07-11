const CreateCoworking = () => {
  // fonction appelée par l'event listener
  // elle prend automatiquement en paramètre
  // un objet event qui contient des informations
  // sur le submit du formulaire
  const handleSubmit = (event) => {
    // empêcher le comportement par défaut du formulaire
    // c'est à dire le rechargement de la page
    event.preventDefault();

    // récupérer les valeurs des champs du formulaire
    const title = event.target.title.value;
    const description = event.target.description.value;
    const address = event.target.address.value;

    // afficher les données envoyées sous le formulaire
    console.log(title + " " + description + " " + address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Titre</label>
      <input type="text" name="title" />

      <label>Description</label>
      <textarea name="description" cols="30" rows="10"></textarea>

      <label>Adresse</label>
      <input type="text" name="address" />

      <button type="submit">Créer</button>
    </form>
  );
};

export default CreateCoworking;
