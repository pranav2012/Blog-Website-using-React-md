import React from 'react';
import Markdown from "react-textarea-markdown";
import '../Styles/Blogfield.scss';

export default function Blogfield() {
    return (
        <div className="Blogfield">
            <div className="blogform">
                <input className="blog_title" type="text" placeholder="Enter your Blog Title"></input>
                <Markdown textarea={true} customWidth={[50,50]}/>
                <button className="blog_publish" type="submit">Publish</button>
            </div>
        </div>
    )
}
