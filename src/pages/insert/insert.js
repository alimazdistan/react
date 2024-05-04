import Axios from "axios";
import { useContext, useState } from "react"
import { loginpro } from "../../App";

const Insert = () => {
    const { token, setToken } = useContext(loginpro)
    let ab = sessionStorage.getItem("token")
    const [data, setData] = useState([]);
    const [body, setBody] = useState('');
    const [titel, setTitel] = useState('');
    let a = { 'titel': 'ddddd', 'body': 'gfgfgfgffgfggf' }
    function ins(e) {
        e.preventDefault()
        Axios.post("http://localhost/webservice/insert.php", { titel: titel, body: body }).then(res =>
            console.log(res.data))
        setBody('');
        setTitel('')
    }
    console.log(body);
    console.log(titel);

    return (
        <div>
            <h1>insert</h1>
            <p>{ab}</p>

            <span>titel:</span>
            <input type="text" onChange={(e) => {
                setTitel(e.target.value)

            }}></input>
            <br />
            <span>body:</span>
            <input type="text" onChange={(e) => {
                setBody(e.target.value)

            }}></input>
            <br />
            <button onClick={(e) => ins(e)}>insert</button>


        </div>
    )


}
export default Insert;