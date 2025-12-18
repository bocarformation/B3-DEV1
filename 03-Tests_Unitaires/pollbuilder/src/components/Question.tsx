import type React from "react";
import { PollModel } from "../domain/model/poll-model";
import { Answer } from "./Answer";

export const Question: React.FC<{
    question: PollModel.Question,
    onChange: (id: string, value: string) => void,
    addAnswer:(id: string) => void
    removeAnswer: (id: string, answerId: string) => void
    updateAnswer: (id: string, answerId: string, value: string) => void
}> = ({ question, onChange, addAnswer, removeAnswer, updateAnswer }) => {
    return (
        <form className="w-full max-w-sm">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" type="text" value={question.title} onChange={(e) => onChange(question.id, e.target.value)} />
            {question.answers.map((answer) => (
                <Answer key={answer.id} title={answer.title} onRemove={() => removeAnswer(question.id, answer.id)} onChange={title => updateAnswer(question.id, answer.id, title)} />
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-gray-500" onClick={() => addAnswer(question.id)}>Ajouter une réponse</button>
        </form>
    )
}