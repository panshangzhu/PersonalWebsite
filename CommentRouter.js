const router = require("express").Router();
let Comment = require("./models/CommentModel");

router.route("/").get((req, res) => {
  Comment.find()
    .then(Comments => res.json(Comments))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  const time = Date().toString();
  const newComment = new Comment({
    name,
    comment,
    time
  });
  newComment
    .save()
    .then(() => res.json("Comment Added"))
    .catch(err => res.status(400).json("Error: " + err));
});
module.exports=router;