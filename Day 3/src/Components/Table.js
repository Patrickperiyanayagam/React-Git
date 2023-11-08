import '../Assests/css/Table.css';
const Table =  (props)=> {
    return (
        <>
        <body>
            <div className="outer">
                <div className="inner">
                    <table>
                        <tr className="new1">
                            <th><b>Fields</b></th>
                            <th><b>Data</b></th>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td>Register No:</td>
                            <td>{props.regno}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{props.phno}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>{props.dept}</td>
                        </tr>
                        <tr>
                            <td>Year of Studying</td>
                            <td>{props.yos}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </body>
        </>
    )
}
export default Table;