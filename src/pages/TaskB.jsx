import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../components/Nav-bar';

const TaskB = () => {
  const [prompt, setPrompt] = useState("");   
  const [loading, setLoading] = useState(false); 
  const [response, setResponse] = useState(""); 

  const getContent = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API}`,
        { contents: [{ parts: [{ text: prompt }] }] }
      );
      setResponse(res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
    } catch (err) {
      console.error(err);
      setResponse("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-inter text-text-primary flex flex-col items-center justify-start">
      <Navbar />

      <div className="mt-16 w-[600px]  rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gemini AI
        </h1>

        <div className="mb-6 p-5 h-64 overflow-y-auto bg-primary text-secondary rounded-xl shadow-inner">
          {loading ? (
            "Loading"
          ) : (
            <p>{response || ""}</p>
          )}
        </div>

        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl border border-onahau-300"
        />

        <button
          onClick={getContent}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-onahau-900 text-white font-bold shadow-lg hover:bg-onahau-500 disabled:opacity-50 transition-colors duration-200"
        >
          Ask Gemini
        </button>
      </div>
    </div>
  );
};

export default TaskB;
