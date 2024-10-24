export default function FindNumber() {
    const numbers = [7, 7, 7, 1, 2];
    const findTwo = numbers.find((number) => number === 2);

    return (
        <p>{findTwo}</p>
    );
}