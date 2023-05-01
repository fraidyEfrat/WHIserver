const express = require("express")
const uploadRoutes = express.Router()
const uploadController = require("../controllers/uploadController")
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

uploadRoutes.route("/").post(upload.single("file"), uploadController.upload)

module.exports =uploadRoutes