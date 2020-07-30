import {
  addNewContact,
  getContacts,
  getContactWithID,
} from "../controlers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)

    .post(addNewContact);

  app
    .route("/contact/:contactID")

    .get(getContactWithID)

    .put((req, res) => res.send("PUT request succesful!")) //updates specific ID

    .delete((req, res) => res.send("DELETE request succesful!"));
};

export default routes;

/** (How did you get here again?)

import { addNewContact, getContacts } from "../controlers/crmControler";

const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET request succesful!");
      }
    )

    .post(addNewContact);
(...)
 */
