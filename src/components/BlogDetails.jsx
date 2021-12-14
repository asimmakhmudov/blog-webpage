import React from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
   
    return (
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <img src={blog.image}/>
                    <h2>{blog.title}</h2>
                    <i>Written by {blog.author}</i>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;
