const Filter = ({ setFilteredCategory }) => {
    return (
      <div className="mb-4">
        <select 
          onChange={(e) => setFilteredCategory(e.target.value)} 
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>
    );
  };
  
  export default Filter;
  