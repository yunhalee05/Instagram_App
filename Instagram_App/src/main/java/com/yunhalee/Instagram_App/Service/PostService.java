package com.yunhalee.Instagram_App.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yunhalee.Instagram_App.Entity.Post;
import com.yunhalee.Instagram_App.Repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PostRepository postRepository;
	
	public Post submitPostToDatabase(Post post) {
		return postRepository.save(post);
	}
	
	public ArrayList<Post> retrivePostFromDB(){
		
		ArrayList<Post> postList = postRepository.findAll();
		
		for(int i=0;i<postList.size();i++) {
			Post postItem=postList.get(i);
			postItem.setUserName(userService.displayUserMetaData(postItem.getUserId()).getUserName());
		}
		return postList;
	}

}
