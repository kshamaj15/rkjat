import React, { useEffect, useState } from "react";

import BlogCard from "../../components/BlogCard/BlogCard";
import classes from './Blog.module.scss';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/Assets/BlogData.json');
            const blogsData = await data.json();
            console.log(blogsData);
            setBlogs(blogsData);
        }
        fetchData();
    })

    return (
        <section className={classes.container}>
            <h1>Blog</h1>
            {blogs?.map((blog) => (<BlogCard {...blog} />))}
        </section>
    )
}

export default Blog;