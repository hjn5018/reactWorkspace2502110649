import { useState } from "react";

export default function Register() {
    
    const [person, setPerson] = useState("");
    const [country, setCountry] = useState("");

    const personChange = (e) => {
        setPerson(e.target.value);
    };

    const countryChange = (e) => {
        setCountry(e.target.value);
    };

    return (
        <>
            <div>
                <h1>회원가입</h1>
                <div>
                    이름: <input 
                        name="person" 
                        type="text" 
                        value={person}
                        onChange={personChange}
                    />
                    <span> 입력값: {person}</span>
                </div>
                
                <br />
                <div>
                    국적: <select 
                        name="country" 
                        value={country}
                        onChange={countryChange}
                    >
                        <option value="">선택하세요</option>
                        <option value="kr">한국</option>
                        <option value="uk">영국</option>
                        <option value="us">미국</option>
                    </select>
                    <span> 선택값: {country}</span>
                </div>
            </div>
        </>
    )
}