const allowedOrigins = require('./allowedOrigins')
const corsOptions = {
origin: (origin, callback) => {
if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
callback(null, true)
} else {
callback(new Error('Not allowed by CORS'))
}
},
credentials: true,
optionsSuccessStatus: 200
}
module.exports = corsOptions

//llowedOrigins.indexOf(origin) !== -1 || !origin)
//אם אתה נמצא ברשימה תמשיך לרוץ גם פוסט-מן אם לא new Error('Not allowed by CORS')