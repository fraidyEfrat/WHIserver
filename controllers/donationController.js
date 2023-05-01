const DonationDal = require("../dal/donationDal")
const Donation = require('../models/index')

// @desc Get all articls
// @route GET /aricle
// @access Private


class DonationController{
getAllDonations = async (req, res) => {
    const donations = await DonationDal.getAllDonationsDal();
    console.log(donations)
    if (!donations?.length) {
        return res.status(400).json({ message: 'No donations found' })
    }

    return res.json(donations);

}

addNewDonation = async (req, res) => {
    const { subject, description } = req.body
    console.log(req.body)

    if (!subject && !description) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    console.log(subject)
    const donation = await DonationDal.addNewDonationDal({ subject, description })
    if (donation) { // Created
        return res.status(201).json({ message: 'New donation created' })
    } else {
        return res.status(400).json({
            message: 'Invalid donation data received'
        })
    }

}



deleteDonationById = async (req, res) => {
    //const { iddonation } = req.body
    const iddonation = req.params.iddonation
    if (!iddonation) {
        return res.status(400).json({ message: 'donation ID required' })
    }
    await DonationDal.deleteDonationByIdDal(iddonation);
    res.json(`donation with ID ${iddonation} deleted`)
}

}


const donationController=new DonationController();
module.exports= donationController;