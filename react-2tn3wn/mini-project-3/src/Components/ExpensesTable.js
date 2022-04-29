import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {sortBy: ''};
  }

  render() {
    const exp = this.props.expenses;
    if (this.state.sortBy !== '') {
      exp.sort((a,b) => {
        return a[this.state.sortBy] > b
        [this.state.sortBy] ? 1 : -1;
      });
    }

    return (
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th>
            <Button>
              variant="secondary"
              onClick{() => this.setState({ sortBy: 'name' 'amount' 'date' 'date' 'type'})}
            </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.type}</td>
              <td>{expense.name}</td>
              <td>{expense.transactionDate}</td>
              <td>
                <span>$</span>
                {expense.amount}
              </td>
              <td>
                <ButtonToolbar>
                  <Button
                    variant="outline-light"
                    onClick={(e) => this.props.handleEdit(index)}
                  >
                    E
                  </Button>{' '}
                  |{' '}
                  <Button
                    variant="outline-light"
                    onClick={(e) => this.props.handleDelete(index)}
                  >
                    X
                  </Button>
 
                  const filterItem = (expenses) => {
                    const newItem = Data.filter((expensesFiltered) => {
                    return expensesFiltered = ExpensesTable; 
        
    });
    setItem(newItem);
  };
                </ButtonToolbar>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ExpenseForm;
