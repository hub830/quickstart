package cn.vbill.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import cn.vbill.domain.User5;

@Repository
public interface  User5Repository extends PagingAndSortingRepository<User5, Long>,CrudRepository<User5, Long>,JpaSpecificationExecutor<User5>{

	User5 findByPassword(String password);
	User5 findByName(String name);
}