const controllers = require("../controllers/server.controllers");
const users = require("../models/server.users");
const express = require("express");
const router = express.Router();

router.get("/users", (req, res, next) => {
  users
    .find({}, "email")
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/users/:id", (req, res, next) => {
  users
    .findById(req.params.id, "email given_name family_name points")
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/users/name/:name", (req, res, next) => {
  users
    .find(
      {
        $or: [
          { given_name: { $eq: req.params.name } },
          { family_name: { $eq: req.params.name } },
        ],
      },
      "email given_name family_name points"
    )
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/users/:id/inc", (req, res, next) => {
  var pnt;
  users.findById(req.params.id, "points", (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      pnt = doc.points;
      pnt++;
      users
        .findByIdAndUpdate(
          req.params.id,
          { points: pnt },
          { new: true, select: "points" }
        )
        .then((data) => res.json(data))
        .catch(next);
    }
  });
});

router.post("/users/:id/reset", (req, res, next) => {
  var pnt = 0;
  users
    .findByIdAndUpdate(
      req.params.id,
      { points: pnt },
      { new: true, select: "points" }
    )
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
