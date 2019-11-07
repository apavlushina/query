const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/event", (req, res, next) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(err => next(err));
});

router.post("/event", (req, res, next) => {
  Event.create(req.body)
    .then(name => res.json(name))
    .catch(err => next(err));
});

router.put("/event/:eventId", (req, res, next) => {
  Event.findByPk(req.params.eventId)
    .then(event => {
      if (!event) {
        res.status(404).end();
      } else {
        event.update(req.body).then(event => res.json(event));
      }
    })
    .catch(next);
});

router.delete("/event/:eventId", (req, res, next) => {
  Event.destroy({ where: { id: req.params.eventId } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
