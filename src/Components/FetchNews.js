import React ,{useState} from "react";
import axios from "axios";
import './FetchNews.css';

const FetchNews = () => {
    const [news , setNews] = useState([]);

    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=7c07855117b644e79ab9a3a0ffbf5107")
        .then((response)=>{
            setNews(response.data.articles);
            console.log(response.data.articles);
        })
    }   

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                    <button className='btn btn-primary' onClick={fetchNews}>fetch news</button>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row">
                   {
                       news.map((value)=>{
                           return (
                            <div className="col-6">
                            <div className="card" >
                                 <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">{value.title}</p>
                                          
                                            <a href={value.url} className="btn btn-primary" id="sizing">{value.url}</a>
                                           
                                     </div>
                            </div>
                            </div>
                           )
                       })
                   }
                </div>
            </div>
        </div>
    );
}

export default FetchNews ;