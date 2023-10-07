import React from 'react'
import { Link } from "react-router-dom";
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <button className="Imagebtn"><img src={!imageUrl ? "https://www.fluentin3months.com/wp-content/uploads/2021/09/german-articles.jpg" : imageUrl} className="card-img-top" alt="..." /></button>
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <button><Link className="nav-link" to="/Athletics">Register</Link></button>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
