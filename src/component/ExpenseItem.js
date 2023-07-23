import ExpenseDate from "./Expensedate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount;
  //   const date = props.date.toISOString();

  return (
    <div className="expense-item">
      {/* <div>{date}</div>; */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>;<div className="expense-item__price">${amount}</div>;
      </div>
    </div>
  );
}

export default ExpenseItem;
