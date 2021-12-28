const Post = require('../models/Post.js')

class PostController {
    async uploadPost(req, res) {
        try {
            const post = new Post({
                title: req.body.title,
                vendorCode: req.body.vendorCode,
                price: req.body.price,
                manufactor: req.body.manufactor,
                discription: req.body.discription,
                model: req.body.model,
                available: req.body.available,
                catagory: req.body.catagory,
                images: req.body.images
            })

            await post.save()

            res.status(200).json({ message: 'Пост успешно сохранён на сервере'})
        } catch(e) {
            console.log(e)
            return res.status(500).json({ message: "Проблема с сервером. Попробуйте позже"})
        }
    }


    async getPosts ( req, res ) {
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch(e) {
            console.log(e)
            res.status(500).json({ message: "Пробема с сервером. Попробуйте позже. Невозможно загрузить данные"})
        }
    }
}


module.exports = new PostController()