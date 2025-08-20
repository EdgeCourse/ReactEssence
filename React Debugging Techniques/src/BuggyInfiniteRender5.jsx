export const BuggyInfiniteRender5 = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  
  // BUG: useEffect runs after every render, causing infinite loop
  useEffect(() => {
    if (!data) {
      setData({ loaded: true, timestamp: Date.now() });
    }
  }); // Missing dependency array!
  
  // BUG: Object in dependency array causes infinite re-renders
  useEffect(() => {
    console.log('Data changed:', data);
  }, [data]); // data is a new object every time
  
  return <div>Data loaded: {data ? 'Yes' : 'No'}</div>;
};
