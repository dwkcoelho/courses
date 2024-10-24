export default function Input(props) {
    const { labelHeading, inputType } = props;

    return (
        <>
            <label>{labelHeading}</label>
            <input type={inputType} />
        </>
    );
}