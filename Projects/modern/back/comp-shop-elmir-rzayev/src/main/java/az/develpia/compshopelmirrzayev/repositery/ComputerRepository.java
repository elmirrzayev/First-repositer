package az.develpia.compshopelmirrzayev.repositery;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import az.develpia.compshopelmirrzayev.model.ComputerModel;
import az.develpia.compshopelmirrzayev.model.User;

public interface ComputerRepository extends JpaRepository<ComputerModel, Integer>{

	public List<ComputerModel> findAllbyId(Integer id);
	

}
