const Form = require("../models/form");

exports.getForm = async (req, res, next) => {
  const forms = await Form.find({});
  try {
    res.send(forms);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.postForm = (req, res, next) => {
  const state = req.body.state;
  const district = req.body.district;
  const village = req.body.village;
  const khata = req.body.khata;
  const survey = req.body.survey;

  const form = new Form({
    state: state,
    district: district,
    village: village,
    khata: khata,
    survey: survey,
  });
  // const form = new Form(req.body);
  form
    .save()
    .then((result) => {
      console.log(result);
      res.send(form);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
};
