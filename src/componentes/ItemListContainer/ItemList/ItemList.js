import React, {useEffect, useState} from 'react'
import "../Item/Item"
import Item from '../Item/Item';
import { Link } from "react-router-dom"
//firebase 
import { db } from "../../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore"


const ItemList = () => {

    const [items, setItems] = useState([])
    

    useEffect(() => {
        const getBooks = async() => {
            const docs = []
            const q = query(collection(db, "libros"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setItems(docs);
        }
        getBooks()
    }, []);    
  
    return (
        <>
            {items.map((item) => {
                return <Link to={`/detail/${item.id}`} key={item.id}>
                            <Item data={item}/>
                        </Link>
            })}
        </>
    )
}

export default ItemList
