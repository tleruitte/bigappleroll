const assertNever = (x: never): never => {
  throw new Error(`Unexpected value: ${x}`);
};

export default assertNever;
