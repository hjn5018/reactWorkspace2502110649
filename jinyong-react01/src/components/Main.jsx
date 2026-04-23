let Main = () => {
    
    let var1 = "폴리텍";
    let var2 = 10;
    let var3 = true;
    let var4 = ["안녕", 30];
    let var5 = {name:"jinjin", age:30}

    return (
        <>
        <h1>메인 영역</h1>
        저는 {var1} 대학에 다니고, {var2 - 5}년 후에는 {var3}, {var4} <br />
        {var3 === true ? "로그인" : "로그아웃"} <br />
        {String(var3)} <br />
        {"10" + 5} <br />
        {Number("10") + 5} <br />
        {String(Boolean("10"))} <br />
        {String(undefined)} <br />
        <br />
        <br />
        {/* {var5}  */}
        {var5.name}
        
        </>
    )
}

export default Main;