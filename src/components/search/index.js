import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import React from "react";

class Search extends React.Component {
  render() {
    const {
      handleSearch,
      searchTerm,
      setSearchTerm,
    } = this.props;

    return (
      <div className="searchContainer">
        <TextField
          {...() => searchTerm ? 'disabled' : ''}
          fullWidth
          id="standard-uncontrolled"
          label="Search for an Image"
          defaultValue=""
          margin="normal"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button
          fullWidth
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