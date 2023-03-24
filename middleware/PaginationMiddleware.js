module.exports = function (scheme) {
  // middleware function
  return (req, res, next) => {
    const page = parseInt(req.query.page, 10);
    const limit = parseInt(req.query.limit, 10);

    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < scheme.length) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }

    results.results = scheme.slice(startIndex, endIndex);

    res.paginatedResults = results;
    next();
  };
};
