import { Avatar } from '@material-ui/core'
import React from 'react'
import './Suggestions.css'
import ImageSrc from '../../images/pp1.png'

function Suggestions() {
    return (
        <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For you</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar className="suggestions__image" src={ImageSrc}/>
                        <div className="suggestions__username" >Friend 1</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar className="suggestions__image" src={ImageSrc}/>
                        <div className="suggestions__username" >Friend 1</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar className="suggestions__image" src={ImageSrc}/>
                        <div className="suggestions__username" >Friend 1</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar className="suggestions__image" src={ImageSrc}/>
                        <div className="suggestions__username" >Friend 1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestions
