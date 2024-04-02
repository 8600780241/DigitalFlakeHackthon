import React from 'react';
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Category() {
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
    const lThree = {
        width: "700px",
        backgroundColor: "#B0ADAD",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "left",
        paddingBottom: "10px",
        paddingTop: "10px"
    }
    const lhThree = {
        width: "700px",
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
    const [categories, setCategories] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetchcategory();
    }, []);
    const fetchcategory = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/category/getcategory', {
                headers: {
                    Authorization: token
                }
            });
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };
    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/category/searchcategory?name=${query}`);
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
                        <h2>Category</h2>
                    </div>
                    <div style={{ width: "400px" }}>
                        <div class="form-group has-search">
                            {/* <span class="fa fa-search form-control-feedback"></span> */}
                            <input type="text" class="form-control" placeholder="Search" style={{ color: "#344955" }} value={query}
                                onChange={e => setQuery(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn" style={{ backgroundColor: "#662671", color: "white" }} onClick={() => { navigate("/addcategory") }}>Add New</button>
                    </div>
                </div>
                <div>
                    <table style={mystyle}>
                        <thead>
                            <tr>
                                <th style={lhTwo}>NAME</th>
                                <th style={lhThree}>DESCRIPTION</th>
                                <th style={lhTwo}>STATUS</th>
                                <th style={lhFour}></th>
                                <th style={lhFour}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map(category => (
                                    <tr key={category.id}>
                                        <td style={lTwo}>{category.name}</td>
                                        <td style={lThree}>{category.description}</td>
                                        <td style={lTwo}>{category.status}</td>
                                        <td style={lFour}> <Link to={`/editCategory/${category.id}`}>
                                            <button class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
                                        </Link>
                                        </td>
                                        <td>
                                            {category.status === 'active' ? (
                                                <Link to={`/deleteCategory/${category.id}`}>
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
                                ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul>
                        {results.map(result => (
                            <li key={result._id}>{result.name}</li>
                        ))}
                    </ul></div>
            </div>
        </>
    )
}