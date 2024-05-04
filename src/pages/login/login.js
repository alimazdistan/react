import { useState } from "react";

export default function Login() {
    const [data, setData] = useState('');
    const url = 'http://localhost/webservice/ch.php'
    function set() {
        let a = sessionStorage.getItem("token")
        console.log(a);

    }
    function delete1() {
        sessionStorage.clear();
    }

    return (

        <div>
            <h1>login</h1>
            <button onClick={set}>show</button>
            <button onClick={delete1}>delete</button>

        </div>

    )


}