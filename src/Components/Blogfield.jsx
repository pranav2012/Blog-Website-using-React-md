import React from 'react'
import '../Styles/Blogfield.scss';

export default function Blogfield() {
    return (
        <div className="Blogfield">
            <form className="blogform" method="POST">
            <input className="blog_title" type="text" placeholder="Enter your Blog Title"></input>
            <textarea className="blog_field" placeholder="Enter your blog"></textarea>
            <button className="blog_publish" type="submit">Publish</button>
            </form>
        </div>
    )
}
