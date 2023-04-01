const express = require("express");
const router = express.Router();
const studentData = require("../services/studentData");

router.get("/", async function (req, res, next) {
  try {
    res.json(await studentData.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Student `, err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    res.json(await studentData.create(req.body));
  } catch (err) {
    console.error(`Error while creating Student`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    console.log("res.body: ...." , req.body)
    res.json(await studentData.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating Student`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await studentData.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting student`, err.message);
    next(err);
  }
});

module.exports = router;
