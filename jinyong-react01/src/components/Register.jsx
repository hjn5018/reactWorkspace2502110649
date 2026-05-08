import { useState, useRef } from "react";

export default function Register() {
    
    let count = useRef(0);
    let inputRef = useRef();
    // let count1 = 0;

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: ""
    });

    const inputChange = (e) => {
        count.current++;
        // count1++;

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = () => {
       if (input.name === "") {
        inputRef.current.focus();
       };
    };
    
    return (
        <>
            <div>
                <h1>회원가입 {count.current}회</h1>
                {/* , {count1}회 */}

                이름: <input ref={inputRef} name="name" type="text" value={input.name} onChange={inputChange}/> {input.name} <br />
                생일: <input name="birth" type="date" value={input.birth} onChange={inputChange}/> {input.birth} <br />

                국적: <select name="country" value={input.country} onChange={inputChange}>
                    <option value="">빈 값</option>
                    <option >한국</option>
                    <option value="uk">영국</option>
                    <option value="us">미국</option>
                </select> {input.country} <br />

                <button onClick={onSubmit}>가입</button>
            </div>
        </>
    )
}