import React from 'react';
import '../Styles/Blogfield.scss';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

export default function Blogfield() {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    return (
        <div className="Blogfield">
            <div className="blogform">
                <input className="blog_title" type="text" placeholder="Enter your Blog Title"></input>
                <div className="blog_field">
                    <MdEditor
                    style={{ height: "500px" }}
                    renderHTML={(text) => mdParser.render(text)}
                    />
                </div>
                <button className="btn-publish btn btn-outline-primary" type="button">Publish</button>
            </div>
        </div>
    )
}