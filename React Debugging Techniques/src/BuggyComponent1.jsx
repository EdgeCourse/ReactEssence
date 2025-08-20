const BuggyComponent1 = () => {
  const message = "Hello World!";
  // BUG: Missing return statement
  <div>{message}</div>;
};