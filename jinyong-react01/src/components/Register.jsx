import { useState } from "react";

export default function Register() {
    /* [1단계: 개별 방식 - 주석 처리]
    const [person, setPerson] = useState("");
    const [country, setCountry] = useState("");

    const personChange = (e) => {
        setPerson(e.target.value);
    };

    const countryChange = (e) => {
        setCountry(e.target.value);
    };
    */

    const [input, setInput] = useState({
        person: "",
        country: ""
    });

    /* [2단계: 통합 관리(값 기반) 방식 - 주석 처리]
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    */

    // [3단계: 통합 관리(함수형 업데이트) 방식 - 현재 활성화]
    const onChange = (e) => {
        setInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <div>
                <h1>회원가입</h1>
                <div>
                    이름: <input 
                        name="person" 
                        type="text" 
                        // [1단계 방식 사용 시]: value={person}, onChange={personChange}
                        // [3단계 방식 사용 시]: value={input.person}, onChange={onChange}
                        value={input.person} 
                        onChange={onChange} 
                    />
                    <span> 입력값: {input.person}</span>
                </div>
                
                <br />
                <div>
                    국적: <select 
                        name="country" 
                        // [1단계 방식 사용 시]: value={country}, onChange={countryChange}
                        // [3단계 방식 사용 시]: value={input.country}, onChange={onChange}
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