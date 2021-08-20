import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const AddMovieForm = (props) => {
    const [addedMovie, setAddedMovie] = useState({
        title: "",
        director: "",
        genre: "",
        metascore: 0,
        description: "",
    });
    const { push } = useHistory();

  const handleChange = (e) => {
    setAddedMovie({
      ...addedMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, addedMovie)
      .then((res) => {
        props.setMovies(res.data);
    })
    .catch((err) => {
        console.log(err.response);
    });
    push('/movies')
  };

  return (
    <div>
      <div className="col">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">
                <strong>Add Movie</strong>
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  value={addedMovie.title}
                  onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Director</label>
                <input
                  value={addedMovie.director}
                  onChange={handleChange}
                  name="director"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  value={addedMovie.genre}
                  onChange={handleChange}
                  name="genre"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Metascore</label>
                <input
                  value={addedMovie.metascore}
                  onChange={handleChange}
                  name="metascore"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={addedMovie.description}
                  onChange={handleChange}
                  name="description"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" className="btn btn-info" value="Save" />
              <Link to={`/movies`}>
                <input
                  type="button"
                  className="btn btn-default"
                  value="Cancel"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;