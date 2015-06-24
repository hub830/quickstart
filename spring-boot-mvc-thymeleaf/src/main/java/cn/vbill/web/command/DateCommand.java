package cn.vbill.web.command;

import java.util.Date;

public class DateCommand {

	public Date getPublishTime() {
		return publishTime;
	}

	public void setPublishTime(Date publishTime) {
		this.publishTime = publishTime;
	}

	public Date getReserveOpenTime() {
		return reserveOpenTime;
	}

	public void setReserveOpenTime(Date reserveOpenTime) {
		this.reserveOpenTime = reserveOpenTime;
	}

	public Date getReserveEndTime() {
		return reserveEndTime;
	}

	public void setReserveEndTime(Date reserveEndTime) {
		this.reserveEndTime = reserveEndTime;
	}

	public Date getPayEndTime() {
		return payEndTime;
	}

	public void setPayEndTime(Date payEndTime) {
		this.payEndTime = payEndTime;
	}

	public Date getOpenInTime() {
		return openInTime;
	}

	public void setOpenInTime(Date openInTime) {
		this.openInTime = openInTime;
	}

	public Date getBlockTime() {
		return blockTime;
	}

	public void setBlockTime(Date blockTime) {
		this.blockTime = blockTime;
	}

	public Date getExitTime() {
		return exitTime;
	}

	public void setExitTime(Date exitTime) {
		this.exitTime = exitTime;
	}

	private Date publishTime;
	private Date reserveOpenTime;
	private Date reserveEndTime;
	private Date payEndTime;
	private Date openInTime;
	private Date blockTime;
	private Date exitTime;
}
