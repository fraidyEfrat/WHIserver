const db = require('../models/index')
const Donation = db.donation

// @desc Get all articls
// @route GET /aricle
// @access Private



class DonationsDataAccessor {
getAllDonationsDal = async (req, res) => {
    res = await Donation.findAll({});
    return res;

}

addNewDonationDal = async (req,res) => {
    res = await Donation.create(req)
    return res
}



deleteDonationByIdDal = async (iddonation) => {
    await Donation.destroy({
        where: {
            iddonation: iddonation
        }})
    }
}
const donationsDataAccessor= new DonationsDataAccessor();
module.exports = donationsDataAccessor