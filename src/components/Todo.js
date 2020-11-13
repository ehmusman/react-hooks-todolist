import React from 'react'

function Todo({ index, todo }) {
    return (
        <div className='row bg-light mb-3 rounded'>
            <div className="col-md-9 h4 py-1">
                {todo.text}
            </div>
            <div className="col-md-2">
                <button className="btn btn-secondary btn-block py-2">Completed</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-danger btn-block py-2 ">X</button>
            </div>
        </div>
    )
}

export default Todo;