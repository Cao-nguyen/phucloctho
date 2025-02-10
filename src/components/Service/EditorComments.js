import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-cshtml.min.js';
import 'prismjs/components/prism-css.min.js';
import axios from 'axios';
import './EditorComments.scss';

function EditorComments({ value, onChange }) {
    const [markdown, setMarkdown] = useState(value || '');

    useEffect(() => {
        setMarkdown(value || '');
    }, [value]);

    const insertMarkdown = (markdownText, selection = '') => {
        const textarea = document.querySelector('textarea');
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        const selectedText = markdown.slice(startPos, endPos);
        const newText = markdown.slice(0, startPos) + markdownText.replace('{}', selectedText || selection) + markdown.slice(endPos);

        setMarkdown(newText);
        onChange(newText);

        setTimeout(() => {
            textarea.selectionStart = startPos + markdownText.indexOf('{}');
            textarea.selectionEnd = textarea.selectionStart + (selectedText.length || selection.length);
            textarea.focus();
        }, 0);
    };

    const handleKeyDown = (event) => {
        const textarea = event.target;
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;

        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            insertMarkdown('**{}**');
        } else if (event.ctrlKey && event.key === 'i') {
            event.preventDefault();
            insertMarkdown('*{}*');
        } else if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();
            insertMarkdown('<u>{}</u>');
        } else if (event.ctrlKey && event.key === 'q') {
            event.preventDefault();
            insertMarkdown('> {}');
        } else if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            insertMarkdown('[{}](Link)');
        } else if (event.key === 'Tab') {
            event.preventDefault();
            const newText = `${markdown.substring(0, startPos)}    ${markdown.substring(endPos)}`;
            setMarkdown(newText);
            setTimeout(() => textarea.setSelectionRange(startPos + 4, startPos + 4), 0);
        }
    };

    const handleInputChange = (event) => {
        const newMarkdown = event.target.value;
        setMarkdown(newMarkdown);
        onChange(newMarkdown);
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
        const UPLOAD_PRESET = process.env.REACT_APP_CLOUD_PRESET;
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_PRESET);

            const today = new Date();
            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();
            const folder = `uploads/img/${day}-${month}-${year}`;
            formData.append('folder', folder);

            try {
                const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData);
                insertMarkdown(`![Image](${response.data.secure_url})`);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [markdown]);

    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <>
            {show ?
                <div className="form-group" onClick={handleClick}>
                    <div className="form-control">Nhấn để bình luận*</div>
                </div >
                :
                <div className="editor-text-comments">
                    <div className="toolbar">
                        <i className="fa-solid fa-bold" title="Ctrl+B" onClick={() => insertMarkdown('**{}**')} />
                        <i className="fa-solid fa-italic" title="Ctrl+I" onClick={() => insertMarkdown('*{}*')} />
                        <i className="fa-solid fa-underline" title="Ctrl+U" onClick={() => insertMarkdown('<u>{}</u>')} />
                        <i className="fa-solid fa-quote-left" title="Ctrl+Q" onClick={() => insertMarkdown('> {}')} />
                        <i className="fa-solid fa-link" title="Ctrl+K" onClick={() => insertMarkdown('[{}](Link)')} />
                        <label htmlFor="image-upload" className="image-upload-label">
                            <i className="fa-solid fa-image" title="Upload Image" />
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="image-upload-input"
                        />
                        <i className="fa-solid fa-code" title="Ctrl+Shift+C" onClick={() => insertMarkdown('```language\n{}\n```')} />
                    </div>

                    <div className="editor-container">
                        <textarea
                            value={markdown}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className="d-flex">
                        <div className="btn btn-outline-secondary" onClick={handleClick} style={{ marginRight: "10px" }}>Huỷ</div>
                        <div className="btn btn-primary">Bình luận</div>
                    </div>
                </div>
            }
        </>
    );
}

export default EditorComments;
