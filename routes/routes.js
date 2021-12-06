const express = require("express");

const router = express.Router();

const formController = require("../controllers/form");
const docController = require("../controllers/documentCon");
// const app = express();
router.get("/form", formController.getForm);
router.post("/forms", formController.postForm);
router.post("/create-pdf", docController.postDocument);
router.get("/fetch-pdf", docController.getDocument);
module.exports = router;
