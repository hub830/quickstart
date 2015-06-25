package cn.vbill.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

/**
 * @author toyota
 *
 */
@Entity
public class TestA {

	private Long id;
	private int a;
	private int b;
	private String c;
	
	public TestA() {
		super();
		a  = 0;
		b = 0;
		c = "";
	}
	
	@Id
	@SequenceGenerator(name="ACCOUNT_ID_SEQ",sequenceName = "ACCOUNT_ID_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "ACCOUNT_ID_SEQ")
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	@Column(length = 4)
	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	@Column(length = 4)
	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	@Column(length = 32)
	public String getC() {
		return c;
	}

	public void setC(String c) {
		this.c = c;
	}
	

}
