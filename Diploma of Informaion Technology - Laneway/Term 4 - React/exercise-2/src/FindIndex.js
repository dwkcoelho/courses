export default function FindIndex() {
    const numbers = [7, 7, 7, 1, 2];
    const number = numbers.findIndex((number) => number === 2);

    return (
        <p>The index from number 2 is {number}</p>
    )
}