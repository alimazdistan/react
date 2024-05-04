import { useContext, useState } from "react"
import { loginpro } from "../../App";

export default function Home() {
    const { token, setToken } = useContext(loginpro)
    const [data, setData] = useState('');
    const url = 'http://localhost/webservice/jwt.php'
    async function set() {
        await fetch(url).then(res => res.json()).then(data => setData(data))
        localStorage.setItem("token", data.token)
        sessionStorage.setItem("token", JSON.stringify(data.token));
        setToken(data.token)
        console.log(data.token);
    }

    return (

        <div>
            <button onClick={set}></button>
        </div>

    )


}