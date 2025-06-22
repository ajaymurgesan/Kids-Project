// src/MathGame.tsx
import React, { useState, useEffect } from "react";
import "./MathGame.css";

const generateOptions = (correct: number): number[] => {
    const options = new Set<number>();
    options.add(correct);

    while (options.size < 4) {
        const random = correct + Math.floor(Math.random() * 10) - 5;
        if (random >= 0) options.add(random);
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
};

const evaluateExpression = (expression: string): number | null => {
    try {
        const sanitized = expression.replace(/[^-()\d/*+.]/g, '');
        // eslint-disable-next-line no-eval
        const result = eval(sanitized);
        return typeof result === "number" && !isNaN(result) ? result : null;
    } catch {
        return null;
    }
};

const MathGame: React.FC = () => {
    const [userInput, setUserInput] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [options, setOptions] = useState<number[]>([]);
    const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
    const [selected, setSelected] = useState<number | null>(null);
    const [result, setResult] = useState<string>("");

    // 🔒 Load saved progress
    useEffect(() => {
        const saved = localStorage.getItem("mathGameProgress");
        if (saved) {
            const data = JSON.parse(saved);
            setUserInput(data.userInput);
            setQuestion(data.question);
            setOptions(data.options);
            setCorrectAnswer(data.correctAnswer);
            setSelected(data.selected);
            setResult(data.result);
        }
    }, []);

    // 💾 Save progress
    useEffect(() => {
        const data = {
            userInput,
            question,
            options,
            correctAnswer,
            selected,
            result,
        };
        localStorage.setItem("mathGameProgress", JSON.stringify(data));
    }, [userInput, question, options, correctAnswer, selected, result]);

    const createQuestion = () => {
        const answer = evaluateExpression(userInput);
        if (answer === null) {
            setResult("❌ Invalid Expression");
            return;
        }

        setQuestion(userInput);
        setCorrectAnswer(answer);
        setOptions(generateOptions(answer));
        setSelected(null);
        setResult("");
    };

    const handleAnswer = (opt: number) => {
        setSelected(opt);
        setResult(opt === correctAnswer ? "✅ Correct!" : "❌ Wrong Answer");
    };

    const restartGame = () => {
        setUserInput("");
        setQuestion("");
        setOptions([]);
        setCorrectAnswer(null);
        setSelected(null);
        setResult("");
        localStorage.removeItem("mathGameProgress");
    };

    return (
        <div className="math-game-container">
            <h2>🧠 Create Your Own Math Challenge!</h2>

            {!question ? (
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Type your math question e.g. 2+2*3"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="math-input"
                    />
                    <button onClick={createQuestion}>🎮 Start Game</button>
                    {result && <p className="feedback">{result}</p>}
                </div>
            ) : (
                <div className="question-section">
                    <h3>{question} = ?</h3>
                    <div className="options">
                        {options.map((opt) => (
                            <button
                                key={opt}
                                className={`option-btn ${selected !== null ? (opt === correctAnswer ? "correct" : opt === selected ? "wrong" : "") : ""}`}
                                onClick={() => handleAnswer(opt)}
                                disabled={selected !== null}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    {selected !== null && (
                        <>
                            <p className="feedback">{result}</p>
                            <button className="restart-btn" onClick={restartGame}>🔁 Try Another</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default MathGame;
