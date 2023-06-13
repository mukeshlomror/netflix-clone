import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>This is counter component</h1>
        <h2> my task is to count the clicks</h2>
        <p>You have clicked {count} times</p>
        <button onClick={() => setCount(count+1)}>click</button>
    </div>
  )
}

export default Counter