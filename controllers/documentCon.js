const pdf = require("html-pdf");
const pdfTemplate = require("../documents/document");

exports.postDocument = (req, res, next) => {
  pdf.create(pdfTemplate(), {}).toFile("./controllers/result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
};

exports.getDocument = (req, res, next) => {
  res.sendFile(`${__dirname}/result.pdf`);
};
