package com.yunhalee.Instagram_App.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunhalee.Instagram_App.Entity.Users;
import com.yunhalee.Instagram_App.Service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("")
	private Users submitUser(@RequestBody Users users) {
		return userService.submitMetaDataOfUser(users);
		
	}
	
	@GetMapping("/{userId}")
	private Users getuserDetails(@PathVariable("userId") String userId) {
		return userService.displayUserMetaData(userId);
		
	}
}
