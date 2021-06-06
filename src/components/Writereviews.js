import React, { useState, useEffect } from "react";
import { db, auth } from "./Firebase";
function Writereviews() {
  const [title, setTitle] = useState();
  const [review, setReview] = useState();
  const [movies, setMovies] = useState();
  const [image, setImage] = useState();
  //database useState
  useEffect(() => {
    let isSubscribed = true;
    db.collection("movies").onSnapshot((snap) => {
      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMovies(list);
      return () => (isSubscribed = false);
    });
  }, []);
  //Adding the data
  function AddMovie(e) {
    if(title && review && image)
    {
    e.preventDefault();
    db.collection("movies").add({
      title,
      review,
      image,
      userId: auth.currentUser.uid,
      date: Date(),
    });
  }
  setTitle("");
  setReview("");
  setImage("");
  }
  //convert Image into URL
  function ImageUrl(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      var filecontent = reader.result;
      setImage(filecontent);
    };
  }
  return (
    <form onSubmit={AddMovie}>
      <div className="container my-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Movie"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Write Review</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="post Review"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div className="input-group mb-3 my-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            onChange={ImageUrl}
          />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Writereviews;
