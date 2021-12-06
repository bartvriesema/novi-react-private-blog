import React from 'react';
import posts from '../data/posts.json';
import {Link, NavLink, useParams} from "react-router-dom";

function Blogpost(props) {
    const {blogId} = useParams();

    return (
        <>
            <div className="main-content">
                <h1>{posts[blogId].title}</h1>
                <h2>{posts[blogId].date}</h2>
                <p>{posts[blogId].content}</p>
            </div>
            <div className="main-content">
                <p> <Link to='/blogposts'>🔙 Terug naar de lijst</Link></p>
            </div>
        </>
    )

}

export default Blogpost;