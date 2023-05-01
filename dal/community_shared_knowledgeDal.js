const db = require('../models/index')
const Community_shared_knowledge = db.community_shared_knowledge

// @desc Get all articls
// @route GET /aricle
// @access Private

class Community_shared_knowledgeDataAccessor {

getAllCommunity_shared_knowledgeDal = async () => {
    const res = await Community_shared_knowledge.findAll();
     return res;

}

addNewCommunity_DonationDal = async (req, res) => {
    res=await Community_shared_knowledge.create(req);
    return res; 

}




updateCommunity_shared_knowledgeByIdDal = async (data, id) => {
    const res = await Community_shared_knowledge.update(data, { where: { idcommunity_shared_knowledge: id } })
    return res
}


deletedeleteCommunity_shared_knowledgeByIdDalByIdDal = async (id) => {

    await Community_shared_knowledge.destroy({
        where: {
            idcommunity_shared_knowledge: id
        }
    });

    
}
}



const community_shared_knowledgeDataAccessor= new Community_shared_knowledgeDataAccessor();
module.exports = community_shared_knowledgeDataAccessor