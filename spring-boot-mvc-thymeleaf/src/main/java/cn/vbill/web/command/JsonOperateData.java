package cn.vbill.web.command;

/**
 * 用于JSON操作的状态返回,主要用于删除操作
 * @author toyota
 *
 */
public class JsonOperateData {
	private boolean result;
	private Long id;
	private int status;//错误码,其它0为成功,用于前台AJAX判断提交失败的原因而给用户提示
	private String desc;
	
	
	public JsonOperateData(boolean result, Long id, String desc, int status) {
		super();
		this.result = result;
		this.desc = desc;
		this.id = id;
		this.status = status;
	}


	public boolean isResult() {
		return result;
	}


	public void setResult(boolean result) {
		this.result = result;
	}


	/**
	 * ID 主要用于删除操作后动态地删除HTML中的对应行
	 * @return
	 */
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDesc() {
		return desc;
	}


	public void setDesc(String desc) {
		this.desc = desc;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}
	
}
