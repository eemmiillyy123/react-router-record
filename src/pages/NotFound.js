import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
export function NotFound(){//使用具名匯出:將default移除
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');//2秒過後會導回首頁
        },2000)
    },[navigate])//讓每次轉到錯誤的頁面就會觸發
    return (
        <>
            這是不存在的頁面
        </>
    )
}