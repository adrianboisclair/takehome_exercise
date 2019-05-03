import Button from "@material-ui/core/Button/Button";
import React from "react";

class Search extends React.Component {
  render() {
    const {
      handleSearch,
      isLoading,
      searchTerm,
    } = this.props;

    return (
      <div className="searchContainer">
        <Button
          fullWidth
          disabled={isLoading ? true : false}
          variant="contained"
          color="primary"
          onClick={() => handleSearch(searchTerm)}
          style={{ marginTop: '16px', marginBottom: '8px'}}
        >
          Search Giphy
        </Button>
      </div>
    );
  }
}

export default Search;