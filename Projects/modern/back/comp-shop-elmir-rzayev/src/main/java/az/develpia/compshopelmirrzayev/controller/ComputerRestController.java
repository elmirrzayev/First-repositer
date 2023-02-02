package az.develpia.compshopelmirrzayev.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.catalina.manager.DummyProxySession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;

import az.develpia.compshopelmirrzayev.exception.MyRunTimeException;
import az.develpia.compshopelmirrzayev.model.ComputerModel;
import az.develpia.compshopelmirrzayev.model.User;
import az.develpia.compshopelmirrzayev.repositery.ComputerRepository;
import az.develpia.compshopelmirrzayev.repositery.UserRepository;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/computers")
public class ComputerRestController {

	@Autowired
	private ComputerRepository computerRepository;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping
	public ComputerModel save(@Valid @RequestBody ComputerModel computer,BindingResult result) {
		if(result.hasErrors()){
			throw new MyRunTimeException(result);
		}
		
		return computerRepository.save(computer);
	}
	
	@GetMapping
	public List<ComputerModel> findAllbyId(ComputerModel computer){
		return computerRepository.findAllbyId(computer.getId());
	}
	@GetMapping(path = "/all")
	public List<ComputerModel> findAll(){
		return computerRepository.findAll();
	}
	
	@DeleteMapping(path = "/{id}")
	public void deleteById(@PathVariable Integer id) {
		computerRepository.deleteById(id);
	}
}
