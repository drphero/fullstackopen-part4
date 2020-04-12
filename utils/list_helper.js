const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const reducer = (sum, item) => sum + item;
  const total = likes.reduce(reducer, 0);
  return total;
};

module.exports = { dummy, totalLikes };
