const express = require("express");
const DonationRouter=express.Router();

const donationController=require("../controllers/donationController");
const verifyJWT = require("../middleware/verifyJWT")

DonationRouter.route("/")
    .get(donationController.getAllDonations)
    .post(donationController.addNewDonation);

DonationRouter.route("/:iddonation")
    .delete(donationController.deleteDonationById);


module.exports=DonationRouter;