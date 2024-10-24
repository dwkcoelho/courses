import Input from "./Input";

export default function Form() {
    return (
        <form>
            <Input labelHeading="Login:" inputType="text" />
            <Input labelHeading="Password:" inputType="password" />
            <button type="submit">Enter</button>
        </form>
    );
}