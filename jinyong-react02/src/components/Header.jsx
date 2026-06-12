import "./Header.css"

function Header() {

    const today = new Date();
    
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();

    return (
        <>
        <h2>Today!</h2>
        <p>
            {`${year}.${month}.${date} ${hour}.${minute}`}
        </p>
        </>
    )
};

export default Header;