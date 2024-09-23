export default function Controllers({resetHandler,undoHandler,redoHandler,circles,undoList}){

    return(
        < >
            <button onClick={resetHandler} disabled={circles.length==0?true:false}>reset</button>
            <button onClick={undoHandler} disabled={circles.length==0?true:false}>undo</button>
            <button onClick={redoHandler} disabled={undoList.length==0?true:false}>redo</button>
        </>
    )
}