import React from 'react'



const LeftCol = (props) => {

    // onChange = {(e) => props.setTask(function () {return ({ ...props.task, title: e.target.value })})} 

    return (
        <div>
            <form action="#" id="myForm">
                <div className="form-group">
                    <label htmlFor="formDiscription">Name</label>
                    <input type="text" name="" id="formTitle" className="form-control" />

                </div>
                <div className="form-group">
                    <label htmlFor="formDiscription">Discription</label>
                    <textarea className="form-control" name="" id="formDiscription" cols="30" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    let title = document.getElementById("formTitle").value
                    let discription = document.getElementById("formDiscription").value
                    let newList = [...props.list, { title: title, discription: discription }]
                    props.setList(() => newList)
                    console.log(props.list)
                }}>
                    ADD
                        </button>
            </form>
        </div>

    )
}

export default LeftCol
