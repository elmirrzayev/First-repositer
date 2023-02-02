package az.develpia.compshopelmirrzayev.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.develpia.compshopelmirrzayev.model.AuthorityModel;
import az.develpia.compshopelmirrzayev.model.User;
import az.develpia.compshopelmirrzayev.repositery.AuthorityRepository;
import az.develpia.compshopelmirrzayev.repositery.UserRepository;

@RestController
@RequestMapping(path = "/users")
@CrossOrigin(origins="*")
public class UserRestController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthorityRepository authorityRepository;
	
	@PostMapping
	public User addUser(@RequestBody User user) {
		Optional<User> userOptional = userRepository.findById(user.getId());
		if(userOptional.isPresent()) {
			User u = new User();
			u.setName("");
			return u;
		}else {
		user.setPassword("{noop}"+user.getPassword());
		user.setEnabled(true);
		
		User savedUser = userRepository.save(user);
		
		AuthorityModel authority = new AuthorityModel();
		authority.setUsername(user.getUsername());
		authority.setAuthority("seller");
		authorityRepository.save(authority);
		
		return savedUser;
		}
	}
	@GetMapping(path = "/login")
	public void login() {
		
	}
}
