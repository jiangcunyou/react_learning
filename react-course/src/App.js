import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Car Insurance',
            amount: '294.67',
            date: new Date(2023,2,23)
        },
        {
            id: 'e2',
            title: 'Lion Computing',
            amount: '55.21',
            date: new Date(1996,4,19)
        },
        {
            id: 'e3',
            title: 'Zoo Keeper',
            amount: '221.2',
            date: new Date(2001,9,12)
        },
        {
            id: 'e4',
            title: 'Beer convention',
            amount: '11.2',
            date: new Date(2011,5,1)
        }
    ];

  return (
    <div>
      <h2>Let's get Started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
