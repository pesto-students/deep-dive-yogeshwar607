const allPromises = (args) => {
  const argsArray = args;

  if (!(argsArray instanceof Array)) {
    return Promise.resolve([]);
  }

  return argsArray.reduce((promiseResolverAccumulator, promise) => {
    return promiseResolverAccumulator.then((results) => {
      return Promise.resolve(promise).then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
};

export { allPromises };
