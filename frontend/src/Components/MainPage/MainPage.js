import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './MainPage.css'
import uploadImage from '../../images/upload1.png'
import { storage } from '../firebase'

function MainPage() {
    const [postArray, setPostArray] = useState([])
    const [progressBar, setProgressBar] = useState("")

    useEffect(() => {
        getPost();
    }, [])

    const getPost = () =>{
        // let data=[
        //     {
        //         "postId" : "12333",
        //         "userprofile":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/25/945556-two-penguins-comforting-each-other-viral-picture.jpg",
        //         "userName": "user234",
        //         "postImageURL" : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        //         "timeStamp":"20210214",
        //         "likes":"13"
        //     },
        //     {
        //         "postId" : "2344",
        //         "userprofile":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/12/25/945556-two-penguins-comforting-each-other-viral-picture.jpg",
        //         "userName": "user2244",
        //         "postImageURL" : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        //         "timeStamp":"20210214",
        //         "likes":"1543"
        //     }
        // ]

        fetch("localhost:8080/post")
        .then(response=> response.json())
        .then(data =>{
            setPostArray(data);


        })

    }

    const upload = (event) =>{
        let image = event.target.files[0];
        if(image ===null || image===undefined){
            return ;
        }
        var uploadTask  = storage.ref("images").child(image.name).put(image);
        uploadTask.on(
            'state_changed', 
            function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgressBar(progress);
            }, 
            function(error) {

            }, 
            function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    
                    console.log('File available at', downloadURL);
                    let payload = {
                        "postId" : Math.floor(Math.random()*100000),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "postPath" : downloadURL,
                        "timeStamp": new Date().getTime(),
                        "likeCount" : 0
                    }
        
                    const requestOptions = {
                        method:"POST",
                        headers:{ "ContentType" : "application/json"}, 
                        body: JSON.stringify(payload)
                    }
        
                    fetch("localhost:8080/post", requestOptions)
                    .then(response=> response.json())
                    .then(data =>{
                        console.log(data)
                        getPost();
        
                    })
                    .catch(error=>{
                        
                    })

                });
            });
    }

    return (
        <div>
            <div style={{"textAlign":"center", "margin":"10px"}} className="mainpage__container">
                <div className="mainpage__divider"></div>
                <div className="fileupload">
                    <label htmlFor="file-upload">
                        <img className="mainpage__uploadicon" src={uploadImage} alt="" />
                    </label>
                    <input onChange={upload} id = "file-upload" type="file"  />
                </div>
                <div className="mainpage__divider"></div>
            </div>
            <div className="upload_text">{progressBar}%</div>
            {
                postArray.map(item=>(
                    <Post profile={item.userprofile} id={item.postId} username={item.userName}  postImage={item.postPath} likes={item.likeCount}/>

                ))
            }

        </div>
    )
}

export default MainPage
