const { getAllBlogs, AddAllBlogs, RemoveAllBlogs, UpdateAllBlogs } = require("../Controllers/BlogController")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/add", AddAllBlogs)
    .put("/:id", UpdateAllBlogs)
    .delete("/:id", RemoveAllBlogs)

module.exports = router