const Controller = ({count}) => {

    return (
        <>
        <div>컨트롤러</div>

        <h1>{count}</h1>
        
        <button>-1</button>
        <button>-10</button>
        <button>-100</button>
        <button>+100</button>
        <button>+10</button>
        <button>+1</button>
        </>
    );
};

export default Controller;