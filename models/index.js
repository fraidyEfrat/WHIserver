const {Sequelize,DataTypes} = require('sequelize');
const {sequelize} = require('./sequelize');
const { applyExtraSetup, apply } = require('./extra-setup');

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
//////here i need all my models= table
db.article = require('./article')
db.course = require('./course')
db.course_register = require('./course_register')
db.responseArticle = require('./responseArticle')
db.search = require('./search')
db.donation = require('./donation')
db.user = require('./user')

db.community_donation=require('./community_shared_knowledge')
db.user_request=require('./user_request')
db.subject=require('./subject')


applyExtraSetup()
//db.sequelize.sync({ force: false })
db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('yes re-sync done!👍')
    })
module.exports = db