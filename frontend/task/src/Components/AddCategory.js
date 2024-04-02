import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import styles from '../Style/list.module.css'
import { useNavigate } from 'react-router-dom';
export default function AddCategory({ token }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState();
    const navigate = useNavigate();
    const handleAddCategory = async (e) => {

        try {
            e.preventDefault();
            console.log(name, description, status);
            await axios.post('http://localhost:8000/category/addcategory', { name, description, status }, { headers: { Authorization: token } });
            navigate('/category');
        } catch (error) {
            console.error('Error adding task', error);
        }
    };

    return (
        <>
            <Header />
            <form onSubmit={handleAddCategory}>
                <div style={{ width: "800px", border: "1px", position: "relative", left: "350px", bottom: "600px", marginLeft: "100px" }}>
                    <h2 style={{ marginBottom: "80px" }}>AddCategory</h2>
                    <div style={{ display: "flex", width: "900px", height: "300px", gap: "80px", flexWrap: "wrap", position: "relative", left: "40px" }}>
                        <div >
                            <input type='text ' placeholder='Category Name' className={styles.containerI} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div >
                            <input type='text ' placeholder='Description' className={styles.containerI} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div >
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" className={styles.containerI} value={status} onChange={(e) => setStatus(e.target.value)} >
                                <option value="">status</option>
                                <option value="active">active</option>
                                <option value="inactive">inactive</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ position: "relative", left: "100px" }}>
                        <button type="submit" class="btn btn-primary" style={{ margin: "20px" }}  >Save</button>
                        <button type="button" class="btn btn-light" style={{ margin: "20px" }} onClick={() => { navigate('/category') }}>cancel</button></div>
                </div>
            </form>
        </>
    )
}