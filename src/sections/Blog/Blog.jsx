import React from "react";

import BlogCard from "../../components/BlogCard/BlogCard";
import { BLOGDATA } from "../../constants";
import classes from './Blog.module.scss';

const Blog = () => {

    return (
        <section className={classes.container} id='blog'>
            <h2>Blog</h2>
            <div className={classes.blogs}>
                {BLOGDATA?.map((blog, index) => (<BlogCard key={index}  {...blog} />))}
            </div>
        </section>
    )
}

export default Blog;