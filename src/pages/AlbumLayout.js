// import AlbumIndex from "./AlbumIndex"
import { Outlet,Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "../components/List";


const api="https://api.unsplash.com/search/photos";
// const accessKey = 'vY-xH2PzSBiDrSxluUQgQFuQK22T5nB4AJamQ7Yu4Ws';
const accessId=process.env.REACT_APP_UNSPLASH_ACCESS;
// console.log(api,accessId);
export default function AlbumLayout() {
    const [list,setList]=useState([]);
    useEffect(()=>{
    // console.log(1); 
        (async()=>{
            const response=await axios.get(`${api}?client_id=${accessId}&query=animal`);
            // console.log(response);
            const {results}=response.data;
            // console.log(results);
            setList(results);
        })()
    },[])
    return(
        <div className="row">
            <div className="col-4">
                左側選單列表
                <p>
                    <Link to="search">搜尋頁面</Link>
                </p>
                <List list={list}></List>
                {/* {list.map((item)=>{
                    return <li key={item.id}>
                       <Link to={item.id}>{item.id}</Link> 
                        </li>;
                })} */}
            </div>
            <div className="col-8">
                <Outlet context={list}/>
                {/* 將list帶入Outlet */}
                {/* <AlbumIndex/> */}
            </div>
        </div>
    )
}