import UpdateCoworking from "./UpdateCoworking";

const ShowCoworking = ({ coworking }) => {
  const handleDelete = () => {
    console.log("coworking supprimé", coworking.id);

    // fetch(`http://localhost:4000/coworkings/${coworking.id}`, {
    //   method: "DELETE",
    // })
  };

  return (
    <article key={coworking.id}>
      <h3>{coworking.name}</h3>
      <p>{coworking.address}</p>
      <p>{coworking.phone}</p>
      <img src={coworking.img} alt={coworking.name} />
      <button onClick={handleDelete}>Supprimer le coworking</button>
      <UpdateCoworking coworking={coworking} />
    </article>
  );
};

export default ShowCoworking;
