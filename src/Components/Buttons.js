
const Buttons = ({ idArray, onClickFunc }) => {

    return (
        <div id="button-grid">
            <div id="header"></div>
            {idArray.map((value) => (
            <button 
            id={value[0]} 
            className="button btn"
            key={value[0]}
            onClick={() => onClickFunc(value[1])}
            style={{gridArea : value[0]}}
            >
                {value[1]}
                </button>))}
        </div>
    )
}

export default Buttons
