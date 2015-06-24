package cn.vbill.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class User5 {
	private Long id;
	private String name;
	private int age;
	private String password;
	public User5(){
		super();
	}
	public User5(String name,int age,String password){
		super();
		this.name=name;
		this.age=age;
		this.password=password;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId(){
		return id;
	}
	
	public void setId(Long id){
		this.id = id;
	}
	
	@Column(length = 256)
	public String getName(){
		return name;
	}
	public void setName(String name){
		this.name=name;
	}
	@Column(length = 3)
	public int getAge(){
		return age;
	}
	public void setAge(int age){
		this.age=age;
	}
	@Column(length = 10)
	public String getPassword(){
		return password;
	}
	public void setPassword(String password){
		this.password=password;
	}
}
