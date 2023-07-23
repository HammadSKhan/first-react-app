import "./Expense.css";
import ExpenseDate from "./Expensedate";

function Expense(props) {
  const title = props.expenses.title;
  const price = props.expenses.amount;
  //   const date = props.expenses.date;

  return (
    <div className="expenses">
      <div>{title}</div>
      <div>{price}</div>
      <ExpenseDate date={props.expenses.date} />
      {/* <div>{date}</div> */}
    </div>
  );
}

export default Expense;
