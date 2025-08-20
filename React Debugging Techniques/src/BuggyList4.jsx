const BuggyList4 = () => {
  const [items, setItems] = useState(['apple', 'banana']);
  
  const addItem = () => {
    // BUG: Mutating the original array
    items.push('orange');
    setItems(items); // React won't detect this change
  };
  
  const removeItem = (index) => {
    // BUG: Mutating with splice
    items.splice(index, 1);
    setItems(items);
  };
  
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Orange</button>
    </div>
  );
};
