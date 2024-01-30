import { useState ,useEffect} from "react";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import List from "../components/List";
const api="https://api.unsplash.com/search/photos";

const accessId=process.env.REACT_APP_UNSPLASH_ACCESS;
export default function AlbumSearch(){
    const [search,setSearch]=useState('');
    const [list,setList]=useState([]);

    const [searchParams,setSearchParams]=useSearchParams();
    //測試用用來看網址測試是怎麼用的
    //網址參數的運作 會加上?後面接各種參數 ex:http://localhost:3001/album/search?query=people
    // useEffect(()=>{
    //     // console.log(searchParams);//裡面有許多方法
    //     // console.log(searchParams.get('query'));//取得網址列的參數
    //     setSearchParams({query:'building'});//寫入 網址會變成http://localhost:3001/album/search?query=building
    // },[])
    useEffect(()=>{
        // console.log(1); 
        if(search!==''){
            (async()=>{
                const response=await axios.get(`${api}?client_id=${accessId}&query=${search}`);
                // console.log(response);
                const {results}=response.data;
                // console.log(results);
                setList(results);
            })()
        }
    },[search])//當search更新時會觸發
    useEffect(()=>{
        setSearch(searchParams.get('query'))
    },[searchParams])//網址參數改動時就會search寫入
    return (
        <>
            這是搜尋頁面{search}
            <input type="text" className="form-control"
            defaultValue={search}
            onKeyUp={(e)=>{
                // console.log(e);
                if(e.code==='Enter'){
                    // setSearch(e.target.value);
                    setSearchParams({query:e.target.value})
                }
            }}/>
            <List list={list}></List>
            {/*預設值，不會直接寫入*/}
            {/* {list.map((item)=>{ */}
                {/* return <li key={item.id}> */}
                    {/* 會帶到/album/search/:id這個路徑會是錯的 */}
                    {/* <Link to={item.id}>{item.id}</Link>  */}
                    {/* <Link to={`/album/${item.id}`}>{item.id}</Link>  */}
                {/* </li>; */}
            {/* })} */}
        </>
    )
}