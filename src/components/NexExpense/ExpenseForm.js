import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>

{
    const [ enteredTitle, setEnteredTitle ] = useState( "" )
    const [ enteredAmount, setEnteredAmount ] = useState( "" ); 
       const [enteredDate, setEnteredDate] = useState("");
   
    const titleChangeHandler = ( event ) =>
  { 
      setEnteredTitle(event.target.value);
    }

    
    const AmountInputHandler = ( event ) =>
    { 
     setEnteredAmount(event.target.value)   
    }

    
    const DateInputHandler = ( event ) =>
    {  
        
        setEnteredDate( event.target.value );
        
    };
   
    const submitHandler = ( event ) =>
    {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date( enteredDate )
        };

        props.SavedData(expenseData);
        setEnteredAmount( '' );
        setEnteredTitle( '' );
        setEnteredDate( '' );
    };

    


        
        

    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control label">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                value={enteredAmount}
                onChange={AmountInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2018-01-01"
                max="2025-01-01"
                value={enteredDate}
                onChange={DateInputHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add New Expense</button>
          </div>
        </form>
      </div>
    );
};

export default ExpenseForm;
