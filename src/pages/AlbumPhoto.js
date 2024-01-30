import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom"

const api="https://api.unsplash.com/photos";
const accessId=process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumPhoto(){
    // console.log(useParams());
    //把id呈現在畫面上
    const {id}=useParams();
    const [photo,setPhoto]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        (async()=>{
            const response=await axios.get(`${api}/${id}?client_id=${accessId}`);
            //會直接取得單張圖片
            // console.log('AlbumPhoto',response);
            setPhoto(response.data);
        })()
    },[id]);
    return (
        <>
             <button type="button" onClick={()=>{
                navigate(-1);//回到上一頁
             }}>回到上一頁</button>
             這是單張圖片{id}
             <p>{photo.description}</p>
             {/*useState那定義的是一個空物件 urls會是undefined */}
             {/*img-fluid:讓圖片不會超過容器 */}
             <img src={photo?.urls?.regular} className="img-fluid" alt="" />
        </>
    )
}