import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <div className="h-48 p-4 m-auto flex justify-center align-center text-red">
            <h3 className="text-xl text-extrabold text-center">{ message }</h3>
        </div>
    )
}

export default ErrorMessage;