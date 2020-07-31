import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controlers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      // middelware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request from: ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  app
    .route("/contact/:contactID")

    // get a specific contact
    .get(getContactWithID)

    // update a specific contact
    .put(updateContact)

    // delete a specific contact
    .delete(deleteContact);
};

export default routes;
