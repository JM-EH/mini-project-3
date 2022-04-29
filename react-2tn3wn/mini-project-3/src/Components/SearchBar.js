import React, { Component } from "react";
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return ( 
      <Form className="justify-content-md-center mt-1">
        <Form.Control 
            placeholder="Search by expense name" 
            onChange={(e) => this.props.onQueryTextChange(e.target.value)}/>
      </Form>
    );
  }
}

export default SearchBar;

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
const [filterText, setFilterText] = useState('');

    <div>
<SearchBar filterText={filterText} 
                 inStockOnly={inStockOnly}
                 onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}/>

<ProductTable products={products} 
                filterText={filterText} 
               inStockOnly={inStockOnly}/>
    </div>
