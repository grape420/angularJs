// 모듈화하면 데이터 출력 시 앞에 $ctrl 붙여야 함
app.component("page1Component", {
	templateUrl : "page1.html",
	controller : function() {
		this.data1 = "문자열1",
		this.data2 = "문자열2"
	}
})