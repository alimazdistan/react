import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from "react"
import  Axios  from "axios";
import { useNavigate } from "react-router-dom";

export default function Form()
{
    
  const nav=useNavigate();
const [img,setImg]=useState('');
       const se=yup.object().shape({
        titel:yup.string().required().min(3),
          
        body:yup.string().required(),
        price:yup.number("number").required(),
      description:yup.string().required()
        


       })
       const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(se)});

     const mysubmit=(data)=>{
        
        let formdata=new FormData()
        formdata.append("titel", data.titel)
        formdata.append("body", data.body)
        formdata.append("file", img)
        formdata.append("description", data.description)
        formdata.append("price", data.price)
        
        if (img.type=="image/jpeg" && img.size<=100000)
        {
        Axios.post("http://php.mytest1.ir/insert2.php", formdata,{
            headers: {
              "Content-Type": "multipart/form-data"
              
            },
          }).then(res =>
            alert("added"))
           
           
          }
          else{
            alert("jpeg und <=50kb")
          }
          nav("/")
     }



    return(
        <div className="form">
            insert
            <form onSubmit={handleSubmit(mysubmit)}>

            <textarea placeholder="titel" {...register("titel")}></textarea><br/>
            {errors.titel && errors.titel?.message}
               <textarea placeholder="body" {...register("body")}></textarea><br/>
               {errors.body && errors.body?.message}
               <input type="text" placeholder="price" {...register("price")}></input><br/>
               {errors.price && errors.price?.message}
               
               <textarea  placeholder="description" row="10" {...register("description")}></textarea>
               {errors.description && errors.description?.message}
               <input type="file" onChange={(e) => {
                setImg(e.target.files[0])
               

            }}></input>
               <button type="submit">send</button>


            </form>
        </div>
    )
}