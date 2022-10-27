import React from "react";

const BlogCard = ({ imgUrl, title, description, tags }) => {
    return (
        <div>
            <img src={imgUrl} alt='img' />
            <h4>{title}</h4>
            <p>{description}</p>
            <div>{tags?.map(tag => <span>
                {tag}
            </span>)}</div>
        </div>
    )
}

export default BlogCard;
