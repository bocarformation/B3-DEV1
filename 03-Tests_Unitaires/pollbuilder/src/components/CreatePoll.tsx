import { useCreatePoll } from "../domain/hooks/use-create-poll.hook"

export const CreatePoll: React.FC<{}> = () => {
    const hook = useCreatePoll();

    return (
        <div>
            <h1>Poll Builder App</h1>
            <input placeholder="Entrez le titre du sondage" value={hook.form.pollTitle}type="text" />
        </div>
    )
}