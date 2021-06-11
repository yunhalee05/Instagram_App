package com.yunhalee.Instagram_App.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunhalee.Instagram_App.Entity.Comments;
import com.yunhalee.Instagram_App.Service.CommentsService;

@RestController
@RequestMapping("/comments")
public class CommentsController {
	
	@Autowired
	CommentsService commentsService;
	
	@PostMapping("")
	private Comments submitComment(@RequestBody Comments comment) {
		return commentsService.submitCommentToDB(comment);
	}
	
	@GetMapping("{postId}")
	private ArrayList<Comments> getCommentsForPost(@PathVariable("postId") String postId){
		return commentsService.getAllCommentsForDB(postId);
	}
}
