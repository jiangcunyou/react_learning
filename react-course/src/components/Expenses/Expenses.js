import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        console.log('Expense.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem
                expense={props.items[0]}/>
            <ExpenseItem
                expense={props.items[1]}/>
            <ExpenseItem
                expense={props.items[2]}/>
            <ExpenseItem
                expense={props.items[3]}/>
        </Card>
        </div>
    );
}

export default Expenses;