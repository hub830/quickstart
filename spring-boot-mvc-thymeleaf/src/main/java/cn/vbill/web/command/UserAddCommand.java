package cn.vbill.web.command;


public class UserAddCommand {

	/**	会员名 */
	private String name;
	/**	会员邮箱 */
	private String email;
	/**	手机号 */
	private String mobile;
	/**	密码 */
	private String password;
	
	private String vbillNo;
	private String vbillName;
	
	
	public String getVbillNo() {
		return vbillNo;
	}
	public void setVbillNo(String vbillNo) {
		this.vbillNo = vbillNo;
	}
	public String getVbillName() {
		return vbillName;
	}
	public void setVbillName(String vbillName) {
		this.vbillName = vbillName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
