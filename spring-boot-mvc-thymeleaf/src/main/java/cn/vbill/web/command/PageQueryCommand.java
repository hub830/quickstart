package cn.vbill.web.command;


public  class PageQueryCommand {
	private int page;
	private int pageSize = 10;


	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
}
