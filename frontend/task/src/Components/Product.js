import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Product() {
    const mystyle = {
        width: "1080px",
        marginTop: "40px",
        marginBottom: "15px",
    }
    const lTwo = {
        width: "350px",
        backgroundColor: "#B0ADAD",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: "10px"
    }
    const lhTwo = {
        width: "350px",
        backgroundColor: "#FFF8B7",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: " 30px",
        textAlign: "left",
        color: " #000000"
    }
    const lFour = {
        width: "160px",
        backgroundColor: "#B0ADAD",
        fontSize: "18px",
        fontWeight: "1000",
        lineHeight: "24px",
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: "10px"
    }
    const lhFour = {
        width: "160px",
        backgroundColor: "#FFF8B7",
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: " 30px",
        textAlign: "left",
        color: " #000000"
    }
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/products/getproduct', {
                headers: {
                    Authorization: token
                }
            });
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/products/searchproduct?name=${query}`);
                setResults(response.data);
            } catch (error) {
                console.error('Error searching:', error);
            }
        };
        handleSearch();
    }, [query])

    return (
        <>
            <Header />
            <div style={{ width: "1080px", height: "650px", position: "relative", left: "350px", bottom: "670px", marginLeft: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
                    <div>
                        <h2>Product</h2>
                    </div>
                    <div style={{ width: "400px" }}>
                        <div class="form-group has-search">

                            <input type="text" class="form-control" placeholder="Search" style={{ color: "#344955" }} value={query}
                                onChange={e => setQuery(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn" style={{ backgroundColor: "#662671", color: "white" }} onClick={() => { navigate("/addproduct") }}>Add New</button>
                    </div>
                </div>
                <div>
                    <table style={mystyle}>
                        <thead>
                            <tr>
                                <th style={lhTwo} >NAME</th>
                                <th style={lhTwo}>PACK SIZE</th>
                                <th style={lhTwo}>Category</th>
                                <th style={lhTwo}>MRP</th>
                                <th style={lhTwo}>Image</th>
                                <th style={lhTwo}>STATUS</th>
                                <th style={lhFour}></th>
                                <th style={lhFour}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => {
                                <>
                                    <tr >
                                        <td style={lTwo}>{product.productName}</td>
                                        <td style={lTwo}>{product.packedSize}</td>
                                        <td style={lTwo}>{product.category}</td>
                                        <td style={lTwo}>{product.mrp}</td>
                                        <td style={lTwo}> <img src={product.file} alt="Product Image" style={{ width: "100px", height: "100px" }} /></td>
                                        <td style={lTwo}>{product.status}</td>
                                        <td style={lFour}>   <Link to={`/editproduct/${product.id}`}>
                                            <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button></Link>
                                        </td>
                                        <td>
                                            {product.status === 'active' ? (
                                                <Link to={`/deleteProduct/${product.id}`}>
                                                    <button className="btn btn-danger btn-sm rounded-0" type="button" title="Delete">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </Link>
                                            ) : (
                                                <button className="btn btn-danger btn-sm rounded-0" type="button" title="Delete" disabled>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                </>
                            })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul>
                        {results.map(result => (
                            <li key={result._id}>{result.name}</li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}