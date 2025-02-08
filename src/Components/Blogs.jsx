import React, { useEffect, useState } from "react";
import userImg from "../assets/images/user.jpg";
import noImg from "../assets/images/no-img.png";
import "./Blogs.css";

const Blogs = ({ onShowNews, onCreateBlog, editPost, isEditing }) => {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submited, setSubmited] = useState(false);
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);

  useEffect(() => {
    if (isEditing && editPost) {
      setImage(editPost.image);
      setTitle(editPost.title);
      setContent(editPost.content);
      setShowForm(true);
    } else {
      setImage(null);
      setTitle("");
      setContent("");
      setShowForm(false);
    }
  }, [isEditing, editPost]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const maxSize = 1 * 1024 * 1024;

      if (file.size > maxSize) {
        alert("File is too big! Max size is 1MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 60) {
      setTitle(e.target.value);
      setTitleValid(true);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    setContentValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      if (!title) setTitleValid(false);
      if (!content) setContentValid(false);
      return;
    }

    const newBlog = {
      image: image || noImg,
      title,
      content,
    };

    onCreateBlog(newBlog, isEditing);
    setImage(null);
    setTitle("");
    setContent("");

    setShowForm(false);
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
      onShowNews();
    }, 2000);
  };

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src={userImg} alt="User Image" />
      </div>
      <div className="blogs-right">
        {!showForm && !submited && (
          <button className="post-btn" onClick={() => setShowForm(true)}>
            Create New Post
          </button>
        )}
        {submited && <p className="submission-message">Post submitted!</p>}
        <div className={`blogs-right-form ${showForm ? "visible" : "hidden"}`}>
          <h1>{isEditing ? "Edit Post" : "New Post"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="img-upload">
              <label htmlFor="file-upload" className="file-upload">
                <i className="bx bx-upload"></i> Upload Image
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleImageChange}
              />
            </div>
            <input
              type="text"
              placeholder="Add Title (Max 60 Characters)"
              className={`title-input ${!titleValid ? "invalid" : ""}`}
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              className={`text-input ${!contentValid ? "invalid" : ""}`}
              placeholder="Add text"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <button type="submit" className="submit-btn">
              {isEditing ? "Update Post" : "Submit Post"}
            </button>
          </form>
        </div>

        <button className="blogs-close-btn" onClick={onShowNews}>
          Back <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
