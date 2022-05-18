import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>
{  
    const saveDataHandler = ( enteredData ) =>
    {
        const bora = {
            ...enteredData,
            id: Math.random().toString()
        };

        props.onAddExpense( bora );
  }

    return (
      <div className="new-expense">
        <ExpenseForm SavedData= {saveDataHandler} />
      </div>
    );
};

export default NewExpense;
