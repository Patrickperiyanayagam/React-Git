import { Activity, Album, Atom, Award, BluetoothConnected, BookMarked, Boxes, Castle, Crown, Gem, GraduationCap, Headphones, HelpingHand, PartyPopper, Smile, Trophy } from "lucide-react";
import '../Assests/css/box.css';
export const Box = ()=> {
    return (
        <>
        <div className="hell">
            <div className="tab">
                {/* <h1>Helloo</h1> */}
         <table>
            <tr>
                <td><Album color="red"/></td>
                <td>  <Atom color="#483D8B" /></td>
                <td>  <Award color="white"/></td>
                <td>  <Trophy color="#2F4F4F"/> </td>
            </tr>
            <tr>
                <td>   <Crown color="#F8F8FF"/></td>
                <td>  <BookMarked color="#CD5C5C"/></td>
                <td> <GraduationCap color="#FFFAFA"/> </td>
                <td>   <Castle color="#008080"/></td>
            </tr>
            <tr>
                <td> <Boxes color="blue"/> </td>
                <td>   <Gem color="#008B8B"/></td>
                <td><HelpingHand color="#E6E6FA"/> </td>
                <td><BluetoothConnected color="#7CFC00"/> </td>
            </tr>
            <tr>
                <td>   <PartyPopper color="#FF00FF"/></td>
                <td> <Smile color="#800000"/> </td>
                <td>  <Activity color="#9370DB"/></td>
                <td>  <Headphones color="#191970"/> </td>
            </tr>
        </table>
            </div>
        </div>
        </>

    )
}