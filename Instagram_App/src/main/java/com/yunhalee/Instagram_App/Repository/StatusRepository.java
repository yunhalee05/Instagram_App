package com.yunhalee.Instagram_App.Repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.yunhalee.Instagram_App.Entity.Status;

@Repository
public interface StatusRepository extends CrudRepository<Status, Integer>{
	
	Status save(Status status);
	
	ArrayList<Status> findAll(); 

}
