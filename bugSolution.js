```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (count > 10) {
      console.warn('Count exceeded 10!');
      setIsRunning(false);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```