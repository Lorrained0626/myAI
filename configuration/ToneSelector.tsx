import { useState, useEffect } from "react";

const ToneSelector = () => {
    const [tone, setTone] = useState(localStorage.getItem("aiTone") || "friendly");

    useEffect(() => {
        localStorage.setItem("aiTone", tone);
        window.location.reload(); // Reload page to apply new tone
    }, [tone]);

    return (
        <div className="tone-selector">
            <label htmlFor="tone-select">Choose chatbot tone:</label>
            <select
                id="tone-select"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
            >
                <option value="friendly">Friendly & Humorous</option>
                <option value="professional">Professional & Formal</option>
                <option value="casual">Casual & Conversational</option>
            </select>
        </div>
    );
};

export default ToneSelector;
