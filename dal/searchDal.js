const db = require('../models/index')
const Search = db.search

class SearchDataAccessor {

    getAllSearchDal = async () => {

        const res = await Search.findAll({});
        return res;
    }
    addNewSearchDal = async (req, res) => {
        res = await Search.create(req);
        return res;

    }
    updateSearchByIdDal = async (data, id) => {
        const search = await Search.update(data, { where: { idsearch: id } })
        return search;
    }
    deleteSearchByIdDal = async (idsearch) => {

        await Search.destroy({
            where: {
                idsearch: idsearch
            }
        });

    }
}
const searchDataAccessor = new SearchDataAccessor();
module.exports = searchDataAccessor
