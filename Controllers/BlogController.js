const Blog = require("./../modals/BlogModal")

exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.AddAllBlogs = async (req, res) => {
    try {

        console.log(req.body);
        await Blog.create(req.body)
        res.json({
            success: true,
            message: " Blog Create Successfully",

        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.UpdateAllBlogs = async (req, res) => {
    try {
        const { id } = req.params
        await Blog.findByIdAndUpdate(id, req.body)
        res.json({
            success: true,
            message: " Blog Updated Successfully",

        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}
exports.RemoveAllBlogs = async (req, res) => {
    try {
        const { id } = req.params
        await Blog.findByIdAndDelete(id)
        res.json({
            success: true,
            message: " Blog Removed Successfully",

        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`
        })
    }
}