import React,{useState} from "react";


const Crud =()=>{
    const [name,setName] = useState("")
    const [allData,setAllData] = useState([])
    const [show,setShow] = useState(false)
    const [editIndex,setEditIndex] = useState()

    const handleAdd=()=>{
       if(name.length!==0){
        setAllData(newData=>[...newData,name])
        setName("")
       }
    }

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
        setName("")
    }

    const handleUpdate=()=>{
        allData.splice(editIndex,1,name)
        setAllData([...allData])
        setShow(false)
    }
    console.log(allData)

    return(
        <div>
            <input type={name} onChange={(e)=>setName(e.target.value)} />
            {!show ? <button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>update</button>}
           

            {
                allData.map((val,i)=>
                    <div>
                        <div>{val}</div>
                        <button onClick={()=>handleEdit(i)}>Edit</button>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default Crud;