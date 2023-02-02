package az.develpia.compshopelmirrzayev.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import az.develpia.compshopelmirrzayev.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	public User findByUsername(String username);
}
