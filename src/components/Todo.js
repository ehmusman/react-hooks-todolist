import React from 'react'

function Todo({ index, todo }) {
    return (
        <div className='row bg-light mb-3 rounded'>
            <div className="col-md-9 h3">
                {todo.text}
            </div>
            <div className="col-md-2">
                <button className="btn btn-secondary btn-block ">Completed</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-danger btn-block ">X</button>
            </div>
        </div>
    )
}

export default Todo;