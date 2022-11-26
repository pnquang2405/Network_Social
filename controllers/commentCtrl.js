const Comments = require('../models/commentModel')
const Posts = require('../models/postModel')


const commentCtrl = {
    createComment: async (req, res) => {
        try {
            const { postId, content, tag, reply, postUserId } = req.body

            const post = await Posts.findById(postId)
            if(!post) return res.status(400).json({msg: "This post does not exist."})

            if(reply){
                const cm = await Comments.findById(reply)
                if(!cm) return res.status(400).json({msg: "This comment does not exist."})
            }

            const newComment = new Comments({
                user: req.user._id, content, tag, reply, postUserId, postId
            })

            await Posts.findOneAndUpdate({_id: postId}, {
                $push: {comments: newComment._id}
            }, {new: true})

            await newComment.save()

            res.json({newComment})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}