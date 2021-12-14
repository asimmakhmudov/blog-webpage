import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <Link to={ `/blogs/${blog.id}` }>
                    <div className='blog-preview' key={blog.id}>
                            <img src={blog.image}/>
                            <h2>{blog.title}</h2>
                            <i>Written by {blog.author}</i>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogList;
