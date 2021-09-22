import React from "react";

class SearchBar extends React.Component {
  handleFilterTextChange = (e) => {
    this.props.handleFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.handleInStockChange(e.target.checked);
  };
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          onChange={this.handleFilterTextChange}
          placeholder="Search..."
          value={filterText}
        />
        <p>
          <input
            type="checkbox"
            onChange={this.handleInStockChange}
            checked={inStockOnly}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
