'use client'
import { useState } from "react";


function Client() {
  const [count, setCount] = useState(0);
  return <div>
    <h1 className="text-7xl font-bold mb-4 ml-2">{count}</h1>
    <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>increase</button>

  </div>;
}
export default Client;
