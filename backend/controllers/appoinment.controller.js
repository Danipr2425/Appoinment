const db = require("../models");
const Appoinment = db.appoinments;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
if (!req.body.name){
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
}

const appoinment = {
    name: req.body.name,
    day: req.body.day,
    time: req.body.time
}

Appoinment.create(appoinment)
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the appoinment."

        });
    });
};

exports.findAll = (req,res) => {
    Appoinment.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the appoinment."
            })
        })
};

exports.findOne = (req,res) => {
    const id = req.params.id;

    Appoinment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find appoinment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving appoinment with id=" + id
      });
    });
};
exports.update = (req,res) => {
    const id = req.params.id;

    Appoinment.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "appoinment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update appoinment with id=${id}. Maybe appoinment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating appoinment with id=" + id
      });
    });
};
exports.delete = (req,res) => {
    const id = req.params.id;

    Appoinment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "appoinment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete appoinment with id=${id}. Maybe appoinment was not found!`
        });
      }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete appoinment with id=" + id
      });
    });
};