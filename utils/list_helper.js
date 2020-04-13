const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const reducer = (sum, item) => sum + item;
  const total = likes.reduce(reducer, 0);
  return total;
};

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes), null);
  const blog = blogs.find((blog) => blog.likes === maxLikes);

  if (!blog) {
    return {};
  }
  return {
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };
};

const mostBlogs = (blogs) => {
  const result = _.chain(blogs).countBy('author').toPairs().max().value();
  return {
    author: result[0],
    blogs: result[1],
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs };
