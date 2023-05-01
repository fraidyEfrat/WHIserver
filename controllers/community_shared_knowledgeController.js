const Community_shared_knowledgeDal=require("../dal/community_shared_knowledgeDal");
const community_shared_knowledge = require("../models/community_shared_knowledge");

// @desc Get all articls
// @route GET /aricle
// @access Private

class Community_shared_knowledgeController{

getAllCommunity_shared_knowledge = async (req, res) => {
    // Get all notes from DB
    const community_donation = await Community_shared_knowledgeDal.getAllCommunity_shared_knowledgeDal();
    console.log(community_donation)
    // If no notes
    if (!community_donation?.length) {
        return res.status(400).json({ message: 'No community_donations found' })
    }

    return res.json(community_donation);

}

addNewCommunity_shared_knowledge = async (req, res) => {
    const { subject, description, iduser, counter } = req.body
    // Confirm data
    console.log(req.body)

    if (!subject) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    console.log(subject)
    const community_donation = await Community_shared_knowledgeDal.addNewCommunity_shared_knowledgeDal({ subject, description, iduser, counter })
    if (community_donation) { // Created
        return res.status(201).json({ message: 'New community_donation created' })
    } else {
        return res.status(400).json({
            message: 'Invalid community_donation data received'
        })
    }

}

updateCommunity_shared_knowledgeById = async (req, res) => {
    const { idcommunity_donation, subject, description, iduser, counter} = req.body
    // Confirm data
    if (!idcommunity_donation) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const community_donation = await Community_shared_knowledgeDal.updateCommunity_shared_knowledgeByIdDal({ subject, description, iduser, counter },  idcommunity_donation )
    if (!community_donation) {
        return res.status(400).json({ message: 'community_donation not found' })
    }
    res.json(community_donation)
}


deleteCommunity_shared_knowledgeById = async (req, res) => {
    const  idcommunity_donation = req.params.idcommunity_donation
    console.log(idcommunity_donation)
    if (!idcommunity_donation) {
        return res.status(400).json({ message: 'community_donation ID required' })
    }
    await Community_shared_knowledgeDal.deleteCommunity_shared_knowledgeByIdDal(idcommunity_donation);
    console.log(idcommunity_donation)
    return res.json(`community_donation with ID ${idcommunity_donation} deleted`)
}
}





const community_shared_knowledgeController= new Community_shared_knowledgeController();
module.exports = community_shared_knowledgeController