export const Answer: React.FC<{
    title: string,
    onRemove: () => void,
    onChange: (value: string) => void
}> = ({ title, onRemove, onChange }) => {
    return (
        <>
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" placeholder="Réponse possible" value={title} onChange={(e) => onChange(e.target.value)} />
            <button aria-label="Supprimer la réponse" onClick={onRemove}> X</button>
        </>
    )

}