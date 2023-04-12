import React from 'react'
import React, { useContext } from 'react'
import { expenseContext } from '../../../context/ExpenseContext'

function ExpenseContainer({expenseArr}) {
function ExpenseContainer() {

    const { expenses } = useContext(expenseContext)
  return (
    <>
     {expenseArr.map((e, i) => 
     {expenses.map((e, i) => 
        <div className=' d-flex justify-content-around m-2 p-2 shadow' key={i}>
            <p>Amount - {e.Amount}</p>
            <p>Description - {e.Description}</p>
            <p>Category - {e.Category}</p>
        </div>
     )} 
    </>
  )
}
export default ExpenseContainer