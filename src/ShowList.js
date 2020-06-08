import React from 'react'
import './ShowList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

const ShowList = (props) => {
    const list = props.list
    const listShow = list.map( element => {
        return(<div className="list" key={element.key}>
        <p>
            <input type="text" key={element.key} value = {element.text} onChange = {(e) => props.setUpdate(e.target.value, element.key)}/>
            <span>
                <FontAwesomeIcon className="faicon" icon="trash" onClick= {() => props.deleteItem(element.key)}/> 
            </span>
        </p>
        </div>)
        }   
    )
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listShow}
            </FlipMove>
        </div>
    )



}

export default ShowList