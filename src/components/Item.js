import React, {useEffect, useState} from 'react'
import Card from './Card'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
import data from "./data.json";

const News = (props)=>{
    const [articles, setArticles] = useState(props.parsedData.articles);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [search,setSearch] = useState('');
    const filteredPosts = articles.filter((article) => article.description.includes(search.toLowerCase()))
   


 
        return (
            <>

                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}> IIITK  Intra Sprots Meet</h1>
                {loading && ""}
                    <div className="container">
                         
                    <div className="row">
                        {filteredPosts.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Card title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
            </>
        )
    
}

export default News
