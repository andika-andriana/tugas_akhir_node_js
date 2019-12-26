// fileName: mahasiswaController.js

// Import mahasiswa model
Mahasiswa = require("./mahasiswaModel");

// Handle index actions
exports.index = function(req, res) {
  Mahasiswa.get(function(err, mahasiswa) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Data Mahasiswa Berhasil Di Dapatkan",
      data: mahasiswa
    });
  });
};

// Handle create mahasiswa actions
exports.new = function(req, res) {
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;
  // save the mahasiswa and check for errors
  mahasiswa.save(function(err) {
    if (err) res.json(err);
    res.json({
      message: "Mahasiswa Baru Terdaftar!",
      data: mahasiswa
    });
  });
};

// Handle view mahasiswa info
exports.view = function(req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa) {
    if (err) res.send(err);
    res.json({
      message: "Mahasiswa Details Loading..",
      data: mahasiswa
    });
  });
};

// Handle update mahasiswa info
exports.update = function(req, res) {
  Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa) {
    if (err) res.send(err);
    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;
    // save the mahasiswa and check for errors
    mahasiswa.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Mahasiswa Info Updated",
        data: mahasiswa
      });
    });
  });
};

// handle delete mahasiswa
exports.delete = function(req, res) {
  Mahasiswa.remove(
    {
      _id: req.params.mahasiswa_id
    },
    function(err) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Mahasiswa deleted"
      });
    }
  );
};
