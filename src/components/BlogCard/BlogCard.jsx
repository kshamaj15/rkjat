import React from "react";

import classes from './BlogCard.module.scss';

const BlogCard = ({ imgUrl, title, description, tags, link }) => {

    const openBlog = () => {
        window.open(link, '_target');
    }

    return (
        <div className={classes.gradientBg} onClick={openBlog}>
            <div className={classes.container}>
                <img src={imgUrl} alt='img' height='200px' width='300px' />
                <h4>{title}</h4>
                <p>{description}</p>
                <div>{tags?.map(tag => <span key={tag}>
                    {tag}
                </span>)}</div>
            </div>
        </div>
    )
}

export default BlogCard;
