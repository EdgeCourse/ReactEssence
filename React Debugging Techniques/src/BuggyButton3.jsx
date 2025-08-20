export const BuggyButton3 = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      {/* BUG: Calling setCount immediately, not passing function reference */}
      <button onClick={setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
