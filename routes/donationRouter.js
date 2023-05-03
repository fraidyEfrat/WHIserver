const express = require("express");
const DonationRouter=express.Router();

const donationController=require("../controllers/donationController");
const verifyJWT_admin=require("../middleware/verifyJWT_admin");
const verifyJWT = require("../middleware/verifyJWT");

DonationRouter.route("/")
    .get([verifyJWT,verifyJWT_admin],donationController.getAllDonations)
    .post(donationController.addNewDonation);

DonationRouter.route("/:iddonation")
    .delete([verifyJWT,verifyJWT_admin],donationController.deleteDonationById);


module.exports=DonationRouter;