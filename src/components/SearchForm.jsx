import { useState } from "react";

const SearchForm = (props) => {
  const {searchMovies} = props;

  const [queryValue, setQueryValue] = useState("");

  const onInputchangeHandler = (event) => {
    setQueryValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    searchMovies(queryValue);
  };

  return (
    <form id="search" className="search" onSubmit={onSubmitHandler}>
      <input
        onChange={onInputchangeHandler}
        type="search"
        placeholder="Search for a title..."
        value={queryValue}
      />
    </form>
  );
};

export default SearchForm;
