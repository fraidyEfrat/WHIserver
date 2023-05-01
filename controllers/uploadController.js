const fsPromises =require("fs").promises
const path = require("path")
const {v4:uuid} = require("uuid")
const upload = async (req, res) =>{
    if(!req.file){
        res.status(500).send("No file")
    }
    console.log("in uploud controler")
    try{
    const file = req.file
    const folder = path.join(__dirname, "..", "public", "images")
    const filename = `${uuid()}_${req.file.originalname}`
    const fileUrl  =`${folder}/${filename}`
    
        
        await fsPromises.writeFile(fileUrl, req.file.buffer)
        return res.json({location: fileUrl, name:filename })

    }catch(err){
        res.status(505).send(err)

    }
 res.send("test")
   
}

module.exports = {upload}