import React, { useEffect, useState } from "react";

import Button from "../../components/Button/Button";
// import BlogData from '/Assets/BlogData.json';
import classes from './Blog.module.scss';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/Assets/BlogData.json');
            const blogsData = await data.json()
            console.log(blogsData);
            setBlogs(blogsData);
        }
        fetchData();
    })

    return (
        <section className={classes.container}>
            <h1>Blog</h1>
            <iframe src="https://rkjat.notion.site/The-paradox-of-plenty-3b62883661b147358de08d1b276361fa" />
        </section>
    )
}

export default Blog;