import React, { useState } from "react";
import "./aibot.css";

const AIBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Helper function for handling errors
    const handleError = (errorMessage) => {
        setMessages(prev => [...prev, 
            { text: inputMessage, sender: 'user' },
            { text: errorMessage, sender: 'error' }
        ]);
    };

    const sendMessage = (message) => {
        if (!message.trim()) return;
        
        setIsLoading(true);
        const data = JSON.stringify({
            model: 'claude-3-opus',
            messages: [
                {
                    role: 'user',
                    content: message.trim()
                }
            ]
        });

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    try {
                        const response = JSON.parse(this.responseText);
                        setMessages(prev => [...prev, 
                            { text: message, sender: 'user' },
                            { text: response.content || 'No response from bot', sender: 'bot' }
                        ]);
                    } catch (err) {
                        console.error('Error parsing response:', err);
                        handleError('Error processing response');
                    }
                } else {
                    console.error('API Error:', this.status, this.statusText);
                    handleError(`OOPS! API server busy. Enable to load`);
                }
                setIsLoading(false);
            }
        });

        xhr.onerror = function() {
            console.error('Request failed');
            handleError('Network error occurred');
            setIsLoading(false);
        };

        try {
            xhr.open('POST', 'https://claude-3-7-sonnet.p.rapidapi.com/v1/chat/completions');
            xhr.setRequestHeader('X-RapidAPI-Key', '7f2f47e71bmsh9e74907028d5dafp111363jsn4da44d3e26a5');
            xhr.setRequestHeader('X-RapidAPI-Host', 'claude-3-7-sonnet.p.rapidapi.com');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data);
        } catch (error) {
            console.error('Error sending request:', error);
            handleError('Failed to send request');
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
            sendMessage(inputMessage);
            setInputMessage("");
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-header">
                <h3>Silly AI Assistant</h3>
            </div>
            
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
                {isLoading && <div className="loading">Silly is thinking...</div>}
            </div>

            <form onSubmit={handleSubmit} className="chat-input">
                <input
                    type="text"
                    className="input-ai"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask Silly anything..."
                    disabled={isLoading}
                />
                <button 
                    type="submit" 
                    disabled={isLoading || !inputMessage.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default AIBot;