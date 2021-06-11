package com.yunhalee.Instagram_App.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yunhalee.Instagram_App.Entity.Comments;
import com.yunhalee.Instagram_App.Entity.Post;
import com.yunhalee.Instagram_App.Repository.CommentsRepository;

@Service
public class CommentsService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	CommentsRepository commentsRepository;

	public Comments submitCommentToDB(Comments comment) {
		return commentsRepository.save(comment);
	}
	
	public ArrayList<Comments> getAllCommentsForDB(String postId){
		ArrayList<Comments> commentsList = commentsRepository.findAllByPostId(postId);
		
		for(int i=0;i<commentsList.size();i++) {
			Comments commentItem=commentsList.get(i);
			commentItem.setUserName(userService.displayUserMetaData(commentItem.getUserId()).getUserName());
		}
		return commentsList;
	}
}
