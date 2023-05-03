const ArticleDal = require("../dal/articleDal");
const Article = require("../models/article");

// @desc Get all articls
// @route GET /aricle
// @access Private

class ArticleController {

    getAllArticles = async (req, res) => {
        const articles = await ArticleDal.getAllArticlesDal();
        console.log(articles)
        if (!articles?.length) {
            return res.status(400).json({ message: 'No articles found😢' })
        }

        return res.json(articles);
    }

    addNewArticle = async (req, res) => {
        console.log("addNewArticle");
        const { idsubject, title, content, picture, author, grade } = req.body

        console.log("✔✔✔✔")

        if (!idsubject) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        //console.log(idsubject)
        const article = await ArticleDal.addNewArticleDal({ idsubject, title, content, picture, author, grade })
        console.log("addNewArticle1",article,"addNewArticle1")
        if (article) { // Created
            console.log("addNewArticle2",article,"addNewArticle2")
            return res.status(201).json({ message: 'New article created' })
        } else {
            console.log("addNewArticle3")
            return res.status(400).json({
                message: 'Invalid article data received'
            })
        }

    }

    updateArticleById = async (req, res) => {
        const { idarticle, idsubject, title, content, picture, author, grade } = req.body
        console.log(idarticle, idsubject, title, content, picture, author, grade);
        if (!idarticle) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const article = await ArticleDal.updateArticleByIdDal({ idsubject, title, content, picture, author, grade }, idarticle)
        if (!article) {
            return res.status(400).json({ message: 'article not found' })
        }
        console.log('----------------------------', article);
        res.json(article)

    }


    deleteArticleById = async (req, res) => {
        const idarticle = req.params.idarticle
        // Confirm data
        if (!idarticle) {
            return res.status(400).json({ message: 'article ID required' })
        }
        await ArticleDal.deleteArticleByIdDal(idarticle);
        return res.json(`article with ID ${idarticle} deleted`)
    }
    getArticesBySubject = async (req, res) => {
        const { idsubject } = req.params.idsubject
        console.log(idsubject)
        if (!idsubject) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const articles = await ArticleDal.getArticesBySubjectDal(idsubject);
        if (!articles.length) {
            return res.status(400).json({ message: 'articles not found' })
        }
        res.json(articles)
    }
    getArticleById = async (req, res) => {
        const idarticle = req.params.idarticle
        if (!idarticle) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const article = await ArticleDal.getArticleByIdDal(idarticle);
        if (!article) {
            return res.status(400).json({ message: 'article not found' })
        }
        res.json(article)
    }
    getArticleBySearch = async (req, res) => {
        const keyWord = req.query.keyWord;
        console.log(keyWord);
        const articlesFromSearch = await ArticleDal.getArticlesBySearchDal(keyWord);
        if (articlesFromSearch.length > 0)
            res.send(articlesFromSearch)
        else
            return res.status(400).json({ massage: `No articles were found for your search, please try again` })
    }

}
const articleController = new ArticleController();
module.exports = articleController;