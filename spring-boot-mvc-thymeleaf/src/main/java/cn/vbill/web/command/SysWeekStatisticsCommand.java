package cn.vbill.web.command;


public class SysWeekStatisticsCommand extends PageQueryCommand{
	
	/** 预约方式成交金额*/
	private String dealMoney;
	/** 预约方式成交百分比*/
	private String dealPercent;

	public String getDealMoney() {
		return dealMoney;
	}

	public void setDealMoney(String dealMoney) {
		this.dealMoney = dealMoney;
	}

	public String getDealPercent() {
		return dealPercent;
	}

	public void setDealPercent(String dealPercent) {
		this.dealPercent = dealPercent;
	}
	
	
	
}

