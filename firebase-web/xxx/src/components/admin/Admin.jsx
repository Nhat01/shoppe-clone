import { useState } from "react"
import {list} from '../../redux/store'
import './admin.css'
import { collection, addDoc, FieldValue } from "firebase/firestore"; 
import { db } from "../../firebase/config";


function Admin() {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');

    const [data, setData] = useState(list);

    try {
        const docRef = addDoc(collection(db, "a"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    const handClick = () => {
        setData(prev => {
            const newData = [...prev, {title,img}] 
            console.log(newData);
            return newData
        })
        setTitle('')
        setImg('')
    }

    console.log(data);
    

    return (
        <div>
            <div className="item">
                <h1 className="title">Title</h1>
                <input value={title} type="text" className="input" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="item">
                <h1 className="title">Img</h1>
                <input value={img} type="text" className="input" onChange={e => setImg(e.target.value)}/>
            </div>
            <button className="btn" onClick={handClick}>Add</button>
        </div>
    )
}

export default Admin