import React, { useState, useEffect } from "react";
import Example from "./Example";
import { db, auth } from "./Firebase";
function Movies() {
  const [movies, setMovies] = useState();

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
  function DeleteMovie(id) {
    db.collection("movies").doc(id).delete();
  }
  
  return (
    <>
      
    
    <div className="container my-4">
      <div className="row">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
              {movies &&
                movies.map((movie) =>
                  auth.currentUser.uid === movie.userId ? (
                    <div
                      key={movie.id}
                      className="col d-flex align-items-stretch"
                    >
                      <div className="card shadow-sm" >
                        <img
                          src={movie.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{movie.title}</h5>
                          <p className="card-text">{movie.review}</p>
                          {/* <button
                            className="btn btn-danger btn-small"
                            onClick={() => {
                              DeleteMovie(movie.id);
                            }}
                          >
                            Delete
                          </button> */}
                          <Example Delete={()=>DeleteMovie(movie.id)} />
                          <br/>
                          <small>Added On :{movie.date}</small>
                        </div>
                      </div>
                    </div>
                  ):(null)
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Movies;
