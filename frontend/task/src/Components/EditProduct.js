import React from 'react';
import { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../Style/list.module.css'
export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category: '',
        productName: '',
        packedSize: '',
        mrp: '',
        file: null,
        status: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8000/products/editproduct/${id}`, { formData });
        } catch (error) {
            console.error('Error updating resource:', error);
        }
    };
    return (
        <>
            <Header />
            <div style={{ width: "900px", position: "relative", left: "350px", bottom: "600px", marginLeft: "100px" }}>
                <h2 style={{ marginBottom: "80px" }}>Edit Product</h2>
                <form onSubmit={handleUpdate}>
                    <div style={{ display: "flex", width: "900px", height: "300px", gap: "80px", flexWrap: "wrap", position: "relative", left: "40px" }}>
                        <div >
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="category" className={styles.containerI} onChange={handleChange}>
                                <option value="">Category</option>
                                <option value="milk">milk</option>
                                <option value="fruit">fruit</option>
                            </select></div>
                        <div>
                            <input type="text" placeholder='product name' className={styles.containerI} name="productName" onChange={handleChange} />
                        </div>
                        <div >
                            <input type="text" placeholder='packed size' className={styles.containerI} name="packedSize" onChange={handleChange} />
                        </div>
                        <div >
                            <input type="text" placeholder='MRP' className={styles.containerI} name="mrp" onChange={handleChange} />
                        </div>
                        <div class="mb-3" className={styles.containerI}  >
                            <input class="form-control" type="file" id="formFileMultiple" onChange={handleFileChange} />
                        </div>
                        <div >
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="status" className={styles.containerI} onChange={handleChange} >
                                <option value="">status</option>
                                <option value="active">active</option>
                                <option value="inactive">inActive</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ position: "relative", top: "70px", left: "100px" }}>
                        <button type="submit" class="btn btn-primary" style={{ margin: "20px" }}>Save</button>
                        <button type="button" class="btn btn-light" style={{ margin: "20px" }} onClick={() => { navigate("/product") }}>cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}