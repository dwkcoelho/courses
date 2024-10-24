export default function Hello() {
    const nameList = ['Guilherme', 'Diego', 'Marco', 'Willian'];
    const greetings = nameList.map((name) => {
        return (
            <li key={name}>
                <p>Hello {name}</p>
            </li>
        );
    })
    return (
        <>
            <ul>{greetings}</ul>
        </>
    );
}