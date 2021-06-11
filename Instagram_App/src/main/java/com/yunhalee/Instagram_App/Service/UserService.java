package com.yunhalee.Instagram_App.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yunhalee.Instagram_App.Entity.Users;
import com.yunhalee.Instagram_App.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	public Users submitMetaDataOfUser(Users user) {
		return userRepo.save(user);
	}
	
	public Users displayUserMetaData(String userId) {
		return userRepo.findByUserId(userId);
	}
}
