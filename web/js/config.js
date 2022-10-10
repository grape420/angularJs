app.config(function($stateProvider, $urlRouterProvider){
		
	$urlRouterProvider.otherwise("main")
	
	let mainState = {
		name : "main",
		url : "/main",
		//template : "<h1>Main</h1>"
		views : {
			"main" : {
				templateUrl : "view/main.html",
				controller : "controller2"
			},
			// header@main할 때 main은 url이 /main이라서 main임
			"header@main" : {
				template : "<h3>Header</h3>"
			},
			"content@main" : {
				templateUrl : "view/sub.html"
			},
			"footer@main" : {
				template : "<h3>footer</h3>"
			},
			// content안에 있더라도 sub1@main으로 씀
			"sub1@main" : {
				template : "<h3>sub1 : {{data1}}</h3>",
				controller : "controller1"
			},
			"sub2@main" : {
				template : "<h3>sub2 : {{data2}}</h3>"
			},
			"sub3@main" : {
				template : "<h3>sub3 : {{data2}}</h3>"
			}
		}
		//component : "mainComponent"
	}
	
	let tab1State = {
		name : "main.tab1",
		url : "/main/tab1",
		component : "tab1"
	}
	
	let tab2State = {
		name : "main.tab2",
		url : "/main/tab2",
		component : "tab2"
	}
	
	let tab3State = {
		name : "main.tab3",
		url : "/main/tab3",
		component : "tab3"
	}
	
	let page1State = {
		name : "page1",
		url : "/page1",
		//templateUrl : "page1.html",
		//controller : "page1Controller"
		component : "page1Component"
	}
	
	$stateProvider.state(mainState)
	$stateProvider.state(tab1State)
	$stateProvider.state(tab2State)
	$stateProvider.state(tab3State)
	$stateProvider.state(page1State)
})