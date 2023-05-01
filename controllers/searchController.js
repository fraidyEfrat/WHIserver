const SearchDal = require("../dal/searchDal");
const Search = require("../models/search");

const getAllSearch = async (req, res) => {

    const search = await SearchDal.getAllSearchDal();
    console.log(search)
    console.log(search?.length)
    if (!search?.length) {
        return res.status(400).json({ message: 'No search found' })
    }
    return res.json(search);
}
const addNewSearch = async (req, res) => {
    const { iduser, content, where } = req.body
    console.log(req.body);

    const search = await SearchDal.addNewSearchDal({ iduser, content, where })
    if (search) {
        return res.status(201).json({ message: 'New search created' })
    } else {
        return res.status(400).json({
            message: 'Invalid search data received'
        })
    }
}
const updateSearchById = async (req, res) => {
    const { idsearch, iduser, content, where } = req.body
    console.log(req.body);
    if (!idsearch) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
const search = await SearchDal.updateSearchByIdDal({ idsearch, iduser, content, where }, idsearch)
    if (!search) {
        return res.status(400).json({ message: 'search not found' })
    }
    res.json(search)
}
const deleteSearchById = async (req, res) => {
    const  idsearch  = req.params.idsearch
    console.log(idsearch);
    if (!idsearch) {
        return res.status(400).json({ message: 'search ID required' })
    }
    await SearchDal.deleteSearchByIdDal(idsearch);
    res.json(`search with ID ${idsearch} deleted`)
}

module.exports = {
    getAllSearch,
    addNewSearch,
    updateSearchById,
    deleteSearchById,
}