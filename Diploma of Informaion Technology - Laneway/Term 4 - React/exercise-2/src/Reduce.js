export default function Reduce() {
    const numbers = [7, 7, 7, 1, 2];
    const sum = numbers.reduce((accumulator, number) => {
        return accumulator += number;
    }, 0)

    const words = ['Hello', 'mate', ':)'];
    const phrase = words.reduce((accumulator, word) => {
        return accumulator = accumulator + ' ' + word;
    }, '')

    return (
        <>
            <p>This is the sum = {sum}</p>
            <p>This is the phrase: {phrase}</p>
        </>
    )
}