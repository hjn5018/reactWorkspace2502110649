import "./Header.css"

export default function Header() {

    let cssVar = {
        backgroundColor: "Yellow",
        color: "Red"
    };

    return (
        <>
        <h1 style={cssVar}>헤더 영역</h1>
        <div style={{backgroundColor:"green"}}>점심먹자</div>
        <h2>야호</h2>
        </>
    );
}