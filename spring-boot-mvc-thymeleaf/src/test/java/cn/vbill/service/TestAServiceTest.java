package cn.vbill.service;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import cn.vbill.SampleDataJpaApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SampleDataJpaApplication.class)
public class TestAServiceTest {

	@Autowired
	TestAService testAService;
	
	@Before
	public void setUp() throws Exception {
	}

	@Ignore
	@Test
	public void test() {
		fail("Not yet implemented");
	}


//	@Ignore
	@Test
	public void test1() {
		testAService.test1();
	}

	@Ignore
	@Test
	public void test2() {
		testAService.test2(10291L);
//		testAService.test3(10291L);
	}
}
