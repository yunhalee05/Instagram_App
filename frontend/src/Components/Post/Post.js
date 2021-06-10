import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Post.css'
import postImage from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

function Post(props) {

    const [commentList, setCommentList] = useState([])

    useEffect(() => {
        getComment();
    }, [])

    const getComment= () =>{
        let data = [
            {
                "username":"user1",
                "commnetId" : "user123 ",
                "timeStamp" : "20210101",
                "description":"wow"
            },
            {
                "username":"user1",
                "commnetId" : "user123 ",
                "timeStamp" : "20210101",
                "description":"wow"
            },
            {
                "username":"user1",
                "commnetId" : "user123 ",
                "timeStamp" : "20210101",
                "description":"wow"
            }
        ]

        setCommentList(data);
    }
    return (
        <div className="post__container">
            {/* Header */}
            <div className="post__header">
                <Avatar className="post__image" src={props.profile}/>
                <div className="post__username">{props.username}</div>
            </div>

            {/* Image */}
            <div className="post__img">
                <img src={props.postImage} alt="" width="615px" />
            </div>

            {/* Analytics */}
            <div className="post__analytics">
                <div style={{"marginLeft":"10px"}}>
                    <img src={love} className="post__reactImage" alt="" />
                    <img src={comment} className="post__reactImage" alt="" />
                    <img src={share} className="post__reactImage" alt="" />
                </div>
                <div style={{"fontWeight":"bold", "marginLeft" :"20px"}} >{props.likes} likes</div>
            </div>

            {/* Comment Section */}
            <div>
                {
                    commentList.map(item=>(
                        <div className="post__comment"> {item.username} : {item.description}</div>                        
                    ))
                }

                <input className = "post__commentBox"type="text" placeholder="Add a comment ... " />
            </div>
        </div>
    )
}

export default Post
