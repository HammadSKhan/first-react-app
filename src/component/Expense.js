import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./Expensedate";

function Expense(props) {
  //   const title = props.expenses.title;
  //   const price = props.expenses.amount;
  //   const date = props.expenses.date;

  return (
    <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />

      {/* <div>{title}</div>
      <div>{price}</div>
      <ExpenseDate date={props.expenses.date} /> */}
    </div>
  );
}

export default Expense;
