import React, { Component } from "react";
import { Container } from 'react-bootstrap';

import SearchBar from "./SearchBar.js";
import ExpensesTable from './ExpensesTable';

function searchBar() {
    if (searchShow) {
      return = (SearchBar)/>
      
    <Container>
        <SearchBar onQueryTextChange={setFilter} />
        <ExpensesTable
        expenses={}
        expenses={this.state.expenses}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
/>
    </Container>
);

export default FilterableProductTable;
}