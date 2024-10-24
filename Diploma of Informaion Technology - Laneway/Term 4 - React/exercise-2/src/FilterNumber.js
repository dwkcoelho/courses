export default function FilterNumber() {
    const users = ['Guilherme', 32, 'Diego', 28, 'Marco', 30, 'Willian', 32];
    const justAge = users.filter((user) => typeof user === 'number');

    const ages = justAge.map((age) => {
        return (
            <li>
                {age}
            </li>
        );
    })

    return (
        <ul>{ages}</ul>
    );
}