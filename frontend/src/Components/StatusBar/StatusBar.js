import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './StatusBar.css'
import statusimg from '../../images/pp1.png'
import uploadImage from '../../images/statusadd.png'

function StatusBar() {

    const [statusList, setStatusList] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData=() =>{
        let data=[
            {
                "username" : "username",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "user",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "username",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "user",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "username",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "user",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "username",
                "imageURL" : "../../images/pp1.png"
            },
            {
                "username" : "thisisuser",
                "imageURL" : "../../images/pp1.png"
            }
        ]

        setStatusList(data)

    }
    return (
        <div>
            <div className="statusbar__container">
                <img src={uploadImage} className="statusbar__upload" width="55px" height="55px" alt="" />
                {
                    statusList.map(item=>(
                        <div className="status">
                            <Avatar className = "statusbar__status"src={statusimg}/>
                            <div className="statusbar__text">{item.username}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StatusBar
