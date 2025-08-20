export const BuggyParent2 = () => {
  const userData = { name: "John", age: 25 };
  // BUG: Passing object as 'user' prop, but child expects 'name' and 'age'
  return <ChildComponent user={userData} />;
};

const ChildComponent = ({ name, age }) => (
  <div>
    <p>Name: {name}</p> {/* Will be undefined */}
    <p>Age: {age}</p>   {/* Will be undefined */}
  </div>
);
