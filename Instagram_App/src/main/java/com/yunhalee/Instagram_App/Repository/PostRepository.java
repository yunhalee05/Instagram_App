package com.yunhalee.Instagram_App.Repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.yunhalee.Instagram_App.Entity.Post;

public interface PostRepository extends CrudRepository<Post, Integer> {
	
	Post save(Post post);
	ArrayList<Post> findAll();
	
}
