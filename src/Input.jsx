import React from 'react'

//Input is the child component.The passed data from the parent component will be received in the child(input) component
function Input({label,value,type}) {
  return (
    <div>
      <label htmlFor="">{label}</label>
        <input type={type} />
        {value}
    </div>
  )
}
//setting the input type as text/number dinamically without specifying the same text in each of the labels.
//the props will return an object that contains different elements . and props.variable name can be used to access or set name to that particular element.
export default Input

