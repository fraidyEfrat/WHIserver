require('dotenv').config()//כל המערכת תוכל להשתמש 
const express = require("express");

const app = express();
const path = require('path')//התעסקות עם קבצים סטטים כמו תמונות בדרך כלל מחזיר נתונים ופה אגיד שיחזיר קבצים רק שנמצאים בתיקיית PATH
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const PORT = process.env.PORT || 3600

//middleware    כל הקריאות תוך כדי יכולות להשתמש בזה לכן נקרא כך
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.urlencoded());
app.use(express.json());
//routes
app.use('/', express.static(path.join(__dirname,'public')))
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/article", require("./routes/articleRouter"));
app.use("/api/course", require("./routes/courseRouter"));
app.use("/api/course_register", require("./routes/courseRegisterRouter"));
app.use("/api/response_article", require("./routes/responseArticleRouter"));
app.use("/api/search", require("./routes/searchRouter"));
app.use("/api/donation", require("./routes/donationRouter"));
app.use("/api/user", require("./routes/userRouter"));
app.use("/api/community_shared_knowledge", require("./routes/community_shared_knowledgeRouter"));
app.use("/api/user_request", require("./routes/user_requestRouter"));
app.use("/api/subject", require("./routes/subjectRouter"));
 app.use("/api/upload", require("./routes/uploadRoutes"));


app.use('/', require('./routes/root'))
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


app.all('*', (req, res) => {
    res.status(404)
    // if (req.accepts('html')) {
    //     // res.sendFile(path.join(__dirname, 'views', '404.html'))
    // } else 
    if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})