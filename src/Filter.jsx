import { Link } from "react-router-dom";
const Filter = ({ onFilter }) => {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => onFilter('title', e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum rating"
          min="0"
          max="10"
          onChange={(e) => onFilter('rating', e.target.value)}
        />
        <br />
        <Link to="/list"><button>go list</button></Link>
      </div>
    );
  };
  
  export default Filter;
  