const express = require("express");
const { getPosts, createPosts, updateUser, deleteUser } = require("./user");
const router = express.Router();

router.get("", getPosts);
router.post("", createPosts);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
