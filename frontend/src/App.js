import React, { useState, useEffect } from 'react';

// API function
const fetchInsight = async (data) => {
    try {
        const response = await fetch(`http://localhost:8000/insight/?data=${encodeURIComponent(data)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result.insight;
    } catch (error) {
        console.error('Error fetching insight:', error);
        throw error;
    }
};

function App() {
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchInsight("Revenue Data");
        setInsight(result);
      } catch (err) {
        setError("Failed to fetch insights. Please try again later.");
        console.error("Error fetching insights:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 bg-blue-100 p-4 rounded-lg">AI Business Insight</h1>
                {loading && (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-2">Loading insights...</p>
                  </div>
                )}
                {error && (
                  <div className="text-red-500 text-center bg-red-50 p-4 rounded-lg">
                    {error}
                  </div>
                )}
                {!loading && !error && (
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{insight}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 