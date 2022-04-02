import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => {
    
    const handleDelete = () => {
        axios.delete("http://localhost:3001/articles/" + id)
        window.location.reload()
    }
    
    return <button on onClick={() => {
        if (window.confirm('Voulez-vous supprimer cet article ?')){
            handleDelete()
        }
    }}>Delete</button>        
};

export default DeleteArticle;