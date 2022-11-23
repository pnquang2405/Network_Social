const Posts = require('../models/postModel')

const postCtrl = {
  createPost: async (req, res) => {
    try {
      const { content, images } = req.body

      if (images.length === 0)
        return res.status(400).json({ msg: "Please add your photo" })
      const newPost = new Posts({
        content, images
      })
      await newPost.save()
      res.json({
        msg: 'Create Post',
        newPost
      })
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  }
}

module.exports = postCtrl