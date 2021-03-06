/* eslint-disable no-console */
exports.memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const n = args[0];

    if (n in cache) {
      console.debug('Fetching from cache');
      return cache[n];
    }

    const result = fn(n);

    cache[n] = result;

    return result;
  };
};
