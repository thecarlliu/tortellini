const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    author: { type: String, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true},
    content: { type: String, required: true },
    image: { type: String, required: true },

});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;