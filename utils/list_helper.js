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

module.exports = { dummy, totalLikes, favoriteBlog };
