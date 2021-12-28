const multer = require('multer')

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'images')
    },
    filename (req, file, cb) {
        cb(null, file.originalname)
    }
})

const checkFileType = (file, cb) => {
    const filetypes = /jpg|jpeg|png/
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype) {
        return cb(null, true)
    } else {
        cb('Images only!')
    }
}

module.exports = multer({ storage, fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
}})