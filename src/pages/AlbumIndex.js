import { useOutletContext } from "react-router-dom"
import List from "../components/List";
export default function AlbumIndex() {
    const list=useOutletContext();//取出資料
    // console.log('AlbumIndex:',list);
    return(
        <div>這是相簿的首頁
            <List list={list}></List>
            {/* {list.map((item)=>{
                    return <li key={item.id}>{item.id}</li>;
            })} */}
        </div>
    )
}