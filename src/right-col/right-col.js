import React from 'react'


const RightCol = (props) => {
    return (

        <div className="row">
            <div className="col-12">
                <h3>Title</h3>
                {props.displayItem.title}
                <br />
                <h3>Discription</h3>
                {props.displayItem.discription}
            </div>
        </div>

    )
}

export default RightCol
