module.exports = {
  hooks: {
    readPackage(pkg) {
      delete pkg.scripts;
      return pkg;
    }
  }
};
