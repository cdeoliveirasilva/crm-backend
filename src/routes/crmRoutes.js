import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
} from "../controlers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactID")

    .get(getContactWithID)

    .put(updateContact) //updates specific ID

    .delete((req, res) => res.send("DELETE request succesful!"));
};

export default routes;
