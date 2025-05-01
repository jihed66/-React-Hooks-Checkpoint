import { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: ' ',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <div className="add-movie">
      <input name="title" placeholder="Title" onChange={handleChange} value={newMovie.title} />
      <input name="description" placeholder="Description" onChange={handleChange} value={newMovie.description} />
      <input name="posterURL" placeholder="Poster URL" onChange={handleChange} value={newMovie.posterURL} />
      <input name="rating" type="number" placeholder="Rating" onChange={handleChange} value={newMovie.rating} />
      <button onClick={handleSubmit}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
