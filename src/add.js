function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}

export default add;
