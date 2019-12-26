// fileName: api-routes.js

// initialize Express router
let router = require("express").Router();

// set default API responses
router.get("/", function(req, res) {
  res.json({
    status: "API its Working",
    message: "Welcome to resthub crafted!"
  });
});

// Import mahasiswa controller
var mahasiswaController = require("./mahasiswaController");

// mahasiswa routes
router
  .route("/mahasiswa")
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);
router
  .route("/mahasiswa/:mahasiswa_id")
  .get(mahasiswaController.view)
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);
// exports API module
module.exports = router;
