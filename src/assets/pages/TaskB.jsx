import axios from 'axios';
import React, { useState } from 'react'

const TaskB = () => {
    const [prompt, setPrompt] = useState("");   
    const [loading, setLoading] = useState(false); 
    const [response, setResponse] = useState(""); 

    async function getContent() {
        if (!prompt.trim()) return; 
        setLoading(true);
        setResponse("");
        try {
            const res = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API}`,
                {
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                }
            );

            const text =
                res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
            setResponse(text);
        } catch (err) {
            console.error(err);
            setResponse("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
            />
            <button onClick={getContent} disabled={loading}>
                Ask Gemini
            </button>
            <div>{loading ? "Loading..." : response}</div>
        </div>
    )
}

export default TaskB
