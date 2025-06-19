import React, { useState } from 'react';
import './CreatePage.css';

const CreatePage: React.FC = () => {
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answer: '' }]);

    const handleQuestionChange = (index: number, value: string) => {
        const updated = [...questions];
        updated[index].question = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex: number, optIndex: number, value: string) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value;
        setQuestions(updated);
    };

    const handleAnswerChange = (index: number, value: string) => {
        const updated = [...questions];
        updated[index].answer = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Game Data:', questions);
        alert('Game created successfully! 🎉');
    };

    return (
        <div className="create-page">
            <h1>Create Your Own Game ✨</h1>
            <form onSubmit={handleSubmit} className="create-form">
                {questions.map((q, i) => (
                    <div key={i} className="question-block">
                        <input
                            type="text"
                            placeholder={`Question ${i + 1}`}
                            value={q.question}
                            onChange={(e) => handleQuestionChange(i, e.target.value)}
                            className="big-input"
                            required
                        />
                        <div className="options-row">
                            {q.options.map((opt, j) => (
                                <input
                                    key={j}
                                    type="text"
                                    placeholder={`Option ${j + 1}`}
                                    value={opt}
                                    onChange={(e) => handleOptionChange(i, j, e.target.value)}
                                    className="option-input"
                                    required
                                />
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Correct Answer"
                            value={q.answer}
                            onChange={(e) => handleAnswerChange(i, e.target.value)}
                            className="answer-input"
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addQuestion} className="add-btn">➕ Add Another Question</button>
                <button type="submit" className="submit-btn">🚀 Create Game</button>
            </form>
        </div>
    );
};

export default CreatePage;
