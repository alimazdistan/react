import Axios from "axios";
import { useContext, useState } from "react"
import { loginpro } from "../../App";
import { useNavigate } from "react-router-dom";

const Insert2 = () => {
    const page=useNavigate()
    const { token, setToken } = useContext(loginpro)
    let ab = sessionStorage.getItem("token")
    const [data, setData] = useState([]);
    const [body, setBody] = useState('');
    const [price, setPrice] = useState('');
    const [titel, setTitel] = useState('');
    const [des, setDes] = useState('');
    const [img, setImg] = useState('');
    let a = { 'titel': 'ddddd', 'body': 'gfgfgfgffgfggf' }
    function ins(e) {
        e.preventDefault()
        let formdata=new FormData()
        formdata.append("titel", titel)
        formdata.append("body", body)
        formdata.append("file", img)
        formdata.append("description", des)
        formdata.append("price", price)
        console.log(formdata);
        Axios.post("http://localhost/webservice/insert2.php", formdata,{
            headers: {
              "Content-Type": "multipart/form-data"
              
            },
          }).then(res =>
            console.log(res.data))
            page("/")
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
            <span>price:</span>
            <input type="price" onChange={(e) => {
                setPrice(e.target.value)

            }}>
                
            </input>
            <br />
            <span>description:</span>
            <input type="text" onChange={(e) => {
                setDes(e.target.value)

            }}>
                
            </input>
            <br />
            <input type="file" onChange={(e) => {
                setImg(e.target.files[0])
               console.log(e.target.files[0]); 

            }}></input>
            <br />
            
            <button onClick={(e) => ins(e)}>insert</button>


        </div>
    )


}
export default Insert2;