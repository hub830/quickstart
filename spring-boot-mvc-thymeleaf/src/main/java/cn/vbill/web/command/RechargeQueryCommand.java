package cn.vbill.web.command;



public class RechargeQueryCommand extends PageQueryCommand{

	private String userId;
	/**输入数据*/
	private String data;
	/**数据类型*/
	private int attrType;
	
	public int getAttrType() {
		return attrType;
	}
	public void setAttrType(int attrType) {
		this.attrType = attrType;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
}
