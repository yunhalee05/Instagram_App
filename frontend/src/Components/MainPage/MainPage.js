import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './MainPage.css'
import uploadImage from '../../images/upload1.png'

function MainPage() {
    const [postArray, setPostArray] = useState([])

    useEffect(() => {
        getPost();
    }, [])

    const getPost = () =>{
        let data=[
            {
                "postId" : "12333",
                "userprofile":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/25/945556-two-penguins-comforting-each-other-viral-picture.jpg",
                "userName": "user234",
                "postImageURL" : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
                "timeStamp":"20210214",
                "likes":"13"
            },
            {
                "postId" : "2344",
                "userprofile":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/25/945556-two-penguins-comforting-each-other-viral-picture.jpg",
                "userName": "user2244",
                "postImageURL" : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
                "timeStamp":"20210214",
                "likes":"1543"
            }
        ]
        setPostArray(data);
    }

    return (
        <div>
            <div style={{"textAlign":"center", "margin":"10px"}}>
                <img className="mainpage__uploadicon" src={uploadImage} alt="" />
            </div>
            {
                postArray.map(item=>(
                    <Post profile={item.userprofile} id={item.postId} username={item.userName}  postImage={item.postImageURL} likes={item.likes}/>

                ))
            }

        </div>
    )
}

export default MainPage
