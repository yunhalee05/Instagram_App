import { Avatar } from '@material-ui/core'
import React from 'react'
import './InfoSection.css'
import imageSrc from '../../images/pp1.png'

function InfoSection() {
    return (
        <div>
            <div className="info__container">
                <Avatar src={imageSrc} className="info__image" />
                <div className="info__content">
                    <div className="info__username">username</div>
                    <div className="info__description">description</div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
