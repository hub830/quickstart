package cn.vbill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.vbill.domain.User5;
import cn.vbill.repository.User5Repository;

@Service
public class User5Service {
	@Autowired
	private User5Repository repository;
	
	public List<User5> list(){
		return (List<User5>) repository.findAll();
	}
	public User5 getId(Long id){
		return repository.findOne(id);
	}
	
	public User5 getName(String name){
		return repository.findByName(name);
	}
	
	public User5 getPassword(String password){
		return repository.findByPassword(password);
	}
	
	public void del(Long id){
		User5 findOne = repository.findOne(id);
		if(findOne!=null)
			repository.delete(id);
	}
	public void save(User5 user){
		repository.save(user);
	}

}
