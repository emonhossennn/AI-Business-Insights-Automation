import React, { useState, useEffect } from 'react';
import { fetchInsight } from './services/api';

function App() {
  const [insight, setInsight] = useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await fetchInsight("Revenue Data");
      setInsight(result);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>AI Business Insight</h1>
      <p>{insight}</p>
    </div>
  );
}

export default App;
