// fileName: mahasisModel.js

// import mongoose
var mongoose = require("mongoose");

// setup schema
var mahasiswaSchema = mongoose.Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String
  },
  jurusan: {
    type: String
  },
  semester: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// export mahasiswa model
var Mahasiswa = (module.exports = mongoose.model("mahasiswa", mahasiswaSchema));
module.exports.get = function(callback, limit) {
  Mahasiswa.find(callback).limit(limit);
};
