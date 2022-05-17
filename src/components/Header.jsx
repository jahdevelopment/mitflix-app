import SearchForm from "./SearchForm";

const Header = (props) => {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <SearchForm searchMovies={props.searchMovies} />
    </header>
  );
};

export default Header;
