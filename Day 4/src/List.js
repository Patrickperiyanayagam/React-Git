const List= ()=> {
    const li = ["Patrick","Praga","KP","Prince","Nitin"];
    li.push("Kiran")
    return(
        <>
        <div>

        {li.map(item=><li>{item}</li>)}
        </div>
        </>
    )
}
export default List;