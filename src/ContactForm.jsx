import { useState } from "react";

const ContactForm = () => {
  const [contactFormRequest, setContactFormRequest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setContactFormRequest({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      message: event.target.message.value,
    });
  };

  return (
    <div>
      <h2>Contactez moi</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName">Nom</label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <button type="submit">Envoyer</button>
      </form>

      {contactFormRequest.email !== "" && (
        <p>
          Merci d'avoir envoyé le message, le service publique vous répondra à ces heures d'ouvertures, le lundi de
          08h00 à 08h22 Et les vendredi des années bisextiles de 14h00 à 14h01. Vos infos :{" "}
          {contactFormRequest.firstName} {contactFormRequest.lastName} : {contactFormRequest.email} "
          {contactFormRequest.message}"
        </p>
      )}
    </div>
  );
};

export default ContactForm;
