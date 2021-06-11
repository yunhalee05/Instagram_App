package com.yunhalee.Instagram_App.Repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.yunhalee.Instagram_App.Entity.Comments;

@Repository
public interface CommentsRepository extends CrudRepository<Comments, Integer>{
	
	Comments save(Comments comment);
	ArrayList<Comments> findAllByPostId(String postId);
}
