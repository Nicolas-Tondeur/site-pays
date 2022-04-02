import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Article from '../components/Article';

const News = () => {
    const [newsData, setUseData] = useState([])
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:3001/articles').then((res) => setUseData(res.data))
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(content.length < 5){
            setError(true)
        }else{
            axios.post('http://localhost:3001/articles', {
            author,
            content,
            date: Date.now()
            }).then(()=>{
                setError(false)
                setAuthor('')
                setContent('')
                getData()
            })
        }
    }

    return (
        <div className='news-container'>
            <header>
                <Navigation />
                <Logo />
            </header>
            <h1>News</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='Nom' value={author}/>
                <textarea style={{border: error ? "1px solid red" : "1px solid #61dafb" }} onChange={(e) => setContent(e.target.value)} placeholder='Message' value={content}></textarea>
                {error &&<p>Veuillez écrire un minimum de 5 caractères.</p>}
                <input type="submit" value="Envoyer" />
            </form>
            <ul>
                {newsData
                .sort((a,b) => b.date - a.date)
                .map((article) => (
                    <Article key={article.id} article={article}/>
                ))}
            </ul>
        </div>
    );
};

export default News;