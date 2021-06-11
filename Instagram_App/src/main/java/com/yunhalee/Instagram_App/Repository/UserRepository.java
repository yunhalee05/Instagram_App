package com.yunhalee.Instagram_App.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.yunhalee.Instagram_App.Entity.Users;

@Repository
public interface UserRepository extends CrudRepository<Users,Integer>{
	
	Users save(Users user);
	Users findByUserId(String userId);
}
