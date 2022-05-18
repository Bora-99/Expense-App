 
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Checkbox from "./Checkbox";


function ExpenseItem ( props )
{ 

  
 

  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{ props.title } </h2>
        <Checkbox/>
        <div className="expense-item__price">${props.amount} </div>
      </div>
      <button>Change title</button>
    </div>
  );
}

export default ExpenseItem;
