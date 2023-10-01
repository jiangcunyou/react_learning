import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXEPENSES = [
    {
        id: 'e1',
        title: 'Car Insurance',
        amount: '294.67',
        date: new Date(2022,2,23)
    },
    {
        id: 'e2',
        title: 'Lion Computing',
        amount: '55.21',
        date: new Date(2021,4,19)
    },
    {
        id: 'e3',
        title: 'Zoo Keeper',
        amount: '221.2',
        date: new Date(2021,9,12)
    },
    {
        id: 'e4',
        title: 'Beer convention',
        amount: '11.2',
        date: new Date(2019,5,1)
    }
];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXEPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
