import { useCreatePoll } from "../domain/hooks/use-create-poll.hook"
import { Question } from "./Question";

export const CreatePoll: React.FC<{}> = () => {
    const hook = useCreatePoll();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Poll Builder App</h1>
            <input   className="w-full max-w-md bg-white border border-gray-300 rounded-lg py-2 px-4 shadow-sm
    focus:outline-none focus:ring-2 focus:ring-indigo-400"  placeholder="Entrez le titre du sondage" value={hook.form.pollTitle} onChange={(e) => hook.updateTitle(e.target.value)} type="text" />
            {
                hook.form.questions.map(q => (
                    <div className="flex flex-row items-center justify-center">
                        <Question
                            question={q}
                            onChange={hook.updateTitleQuestion}
                            addAnswer={hook.addAnswerToQuestion}
                            removeAnswer={hook.removeAnswerFromQuestion}
                            updateAnswer={hook.updateAnswerForQuestion}
                        />
                        <button  className="text-red-500 hover:text-red-700 text-xl transition" aria-label="Supprimer la question" onClick={() => hook.removeQuestion(q.id)}>X</button>
                    </div>
                ))
            }
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={hook.addQuestion}>Ajouter une question</button>
            <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" disabled={!hook.isSubmittable} onClick={hook.submitPoll}>Créer</button>
        </div>
    )
}