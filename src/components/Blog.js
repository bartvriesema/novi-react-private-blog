import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function Blog(props) {

    return (

        <div className="main-content">
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {posts.length}</h2>
            <ul className="blogpost-list">
                {
                    posts.map(post => {
                        return <li key={post.id}>
                            <Link to={`/blogposts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Blog;