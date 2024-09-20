import React, { useState, useEffect } from 'react'
import Modal from './Modal';
import path from '../asset/docPreview.docx'
import path1 from '../asset/textPreview.txt'
import jsPDF from 'jspdf';

const Home = () => {
    
    const [list, setList] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({})
    const fetchData = async ()=>{
        const res = await fetch('https://reqres.in/api/users',{
            method: "GET",
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await res.json()
        setList(json.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleEdit= async(id)=>{
        setShowModal(true)
        const res = await fetch(`https://reqres.in/api/users/${id}`,{
            method: "GET",
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem('token')
            }
        })

        const json = await res.json()
        setUser(json.data)
    }

    const handleFile = async(id, index)=>{
        const res = await fetch(`https://reqres.in/api/users/${id}`,{
            method: "GET",
            headers:{
                'Content-Type':"application/json",
                'auth-token': localStorage.getItem('token')
            }
        })
        const jsonData = await res.json()

        if(index===0 || index >2){          
            
            const doc = new jsPDF();
           
            const jsonText = JSON.stringify(jsonData, null, 2);
           
            doc.text('User Information', 10, 10);
            
            doc.text(jsonText, 10, 20);        
            //doc.save('data.pdf'); 
            doc.output('dataurlnewwindow')
        }
        else if(index===1){
            window.open(path, '_blank');
        }
        else if(index===2){
            window.open(path1, '_blank');
        }
        
    }


    if( list===null){
        return <h1 className='text-xl'>Loading...</h1>
    }

    else{

    return (
        <div className='my-2'>

            <h1 className='p-2 my-2 text-left text-2xl font-bold '>User List</h1>

            <Modal showModal={showModal} setShowModal={setShowModal} user={user}/>
            <table className='table-auto w-full text-center border-collapse border'>
                <thead className='h-10 bg-[#e0e0e2]'>
                    <tr>
                        <th className='border border-slate-300 border-r-0'>S. No</th>
                        <th className='border border-slate-300 border-r-0 border-l-0'>Avatar</th>
                        <th className='border border-slate-300 border-r-0 border-l-0'>Name</th>
                        <th className='border border-slate-300 border-r-0 border-l-0'>Email</th>
                        <th className='border border-slate-300 border-l-0'>Actions</th>                                          
                    </tr>
                </thead>
                <tbody>
                    {list?.map((item, index)=>(
                        <tr>
                            <td className='border border-slate-300 border-r-0' width={"10%"}>{item.id}</td>
                            <td className='border border-slate-300 border-r-0 border-l-0' width={"20%"}><img className='inline' src={item.avatar}/></td>
                            <td className='border border-slate-300 border-r-0 border-l-0' width={"30%"}>{item.first_name+" "+item.last_name }</td>
                            <td className='border border-slate-300 border-r-0 border-l-0' width={"20%"}>{item.email}</td>
                            <td className='border border-slate-300 border-l-0' width={"20%"}>
                                <i className="fa-regular fa-pen-to-square text-[#74C0FC] cursor-pointer text-xl" onClick={()=>handleEdit(item.id)}></i> &nbsp;
                                <i className="fa-regular fa-file text-[#74C0FC] cursor-pointer text-xl" onClick={()=>handleFile(item.id, index)}></i>
                            </td>                    
                        </tr>
                    ))}
                </tbody>
            </table>
            
            
            

        </div>
    )
 }
}

export default Home