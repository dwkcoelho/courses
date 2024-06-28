export default function Game({ title, cover, onRemove}) {
    return (
        <div>
            <img src={cover} alt="" />
            <div>
                <h2>{title}</h2>
                <button onClick={onRemove}>Delete</button>
            </div>
        </div>
    )
}