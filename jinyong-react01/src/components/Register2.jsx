import { useState } from "react";

export default function Register() {

    const [input, setInput] = useState({
        person: "",
        country: ""
    });

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div>
                <h1>회원가입</h1>
                <div>
                    이름: <input 
                        name="person" 
                        type="text" 
                        value={input.person} 
                        onChange={onChange} 
                    />
                    <span> 입력값: {input.person}</span>
                </div>
                
                <br />
                <div>
                    국적: <select 
                        name="country" 
                        value={input.country} 
                        onChange={onChange}
                    >
                        <option value="">선택하세요</option>
                        <option value="kr">한국</option>
                        <option value="uk">영국</option>
                        <option value="us">미국</option>
                    </select>
                    <span> 선택값: {input.country}</span>
                </div>
            </div>
        </>
    )
}