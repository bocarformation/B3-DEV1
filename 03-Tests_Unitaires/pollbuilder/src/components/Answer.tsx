export const Answer: React.FC<{
    title: string,
    onRemove: () => void,
    onChange: (value: string) => void
}> = ({ title, onRemove, onChange }) => {
    return (
        <>
            <input placeholder="Réponse possible" value={title} onChange={(e) => onChange(e.target.value)} />
            <button aria-label="Supprimer la réponse" onClick={onRemove}> X</button>
        </>
    )

}