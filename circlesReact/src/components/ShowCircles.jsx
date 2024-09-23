
export default function ShowCircles({circles}){
    return (
        <>
        {
            circles?.map((pos)=>
            <div key={pos.id} id="dot" style={{position:"absolute",top:(pos.y-7)+"px",left:(pos.x-7)+"px",width:"15px",height:"15px",backgroundColor:pos.color}}>

            </div>)
        }
        </>
    )
}