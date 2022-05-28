import React from "react";

function coffeeBento(mins){
    if (mins >= 30){
        let bento = Math.ceil(mins/10)
        let retString = ''
        while (bento>0) {
            retString += '🍱'
            bento--
        }
        return ' • ' + retString + ` ${mins} min read` 
    }
    else {
        let coffee = Math.ceil(mins/5)
        let retString = ''
        while (coffee>0) {
            retString += '☕️'
            coffee--
        }
        return ' • ' + retString + ` ${mins} min read` 
    }
}
function Article({title, date='January 1, 1970', preview, minutes}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small><span>{coffeeBento(minutes)}</span>
            <p>{preview}</p>
        </article>
    )
}

export default Article