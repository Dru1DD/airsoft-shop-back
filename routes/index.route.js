const express = require('express')

const fileMiddleware = require('../middleware/upload')
const router = express.Router()

const postController = require('../controllers/post.controller')

router.get('/',  (req, res, next) => {
    res.send("Welcome to backend")
})

let upload = fileMiddleware.any()

router.post('/upload', upload, (req, res) => {
    try {
        let filedata = req.files

        if(!filedata) {
            res.send("Ошибка при загрузке файла!")
        } else {
            const formData = req.files
            let fileData = {}

            formData.forEach((value, key) => fileData[key] = value)

            const imgUrls = []

            for( i in fileData) imgUrls.push(fileData[i].path)

            res.json(`${imgUrls}`)
        }
    } catch(e) {
        console.log(e)
    }
})

router.post('/post', postController.uploadPost)

router.get('/posts', postController.getPosts)

module.exports = router