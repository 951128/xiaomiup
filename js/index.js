window.onload = function(){
/*购物车开始*/
	let cart = document.querySelector(".mainRR");
	let cartList = document.querySelector(".card-list");
	cart.onmouseover = function () {
		cartList.textContent = "亲，您还没有选择任何商品！"
		cartList.style.height = "100px";
		cartList.style.boxShadow = "0 5px 5px 2px rgba(0,0,0,0.1)";
		cartList.style.background = "#fff";
		cart.style.background = "#fff";
		cart.style.color = "#ff6700";
	}
	cart.onmouseout = function () {
		cartList.textContent = ""
		cartList.style.height = "0";
		cartList.style.boxShadow = "none";
		cart.style.background = "#424242";
		cart.style.color = "#B0B0B0";
	}
/*购物车结束*/
/*导航开始*/	
	let li = document.querySelectorAll(".nav > li");
	let navList = document.querySelectorAll(".nav-list");
	for (let i = 0; i < li.length-2; i++) {
		//鼠标移入子元素出现
		li[i].onmouseover = function () {
			//让其余子元素全部消失
			for (let j = 0; j < navList.length; j++){
				navList[j].style.display = "none";			
				navList[j].style.border = "none";
			}
			//当前子元素出现
			navList[i].style.display = "block";
			navList[i].style.borderTop = "1px solid #e0e0e0";
		}
		li[i].onmouseout = function (){
			navList[i].style.display = "none";
		}
	}
/*导航结束*/	
	
/*分类侧导航开始*/
	let asideLi = document.querySelectorAll("aside > ul > li");
	let nav2List = document.querySelectorAll(".nav2-box");
	for (let i = 0; i < asideLi.length; i++) {
		//鼠标移入子元素出现
		asideLi[i].onmouseover = function () {
			//让其余子元素全部消失
			for (let j = 0; j < nav2List.length; j++){
				nav2List[j].style.display = "none";			
			}
			//当前子元素出现
			nav2List[i].style.display = "block";
			asideLi[i].style.background = "#FF6700";
		}
		asideLi[i].onmouseout = function (){
			nav2List[i].style.display = "none";
			asideLi[i].style.background = "none";
		}
	}

/*分类侧导航结束*/
	

/*轮播开始*/
//移入移出
	//1.获取元素
	let circle = document.querySelectorAll(".circle li");
	let bannerimg = document.querySelectorAll(".imgbox li");
	let banner = document.querySelector(".banner");
	let rbtn = document.querySelector(".banner .btn2");
	let lbtn = document.querySelector(".banner .btn1");
		
//	console.log(circle,bannerimg,banner,rbtn,lbtn,widths);
	
	banner_oi(circle,bannerimg,banner,rbtn,lbtn,"hot",2000,1);


/*轮播结束*/
	
	
	
/*左右轮播开始*/
	let circle1 = document.querySelectorAll(".neirongB .diandian span");
	let bannerimg1 = document.querySelectorAll(".hary-wrap > li");
	let banner1 = document.querySelector(".hary-wrap");
	let rbtn1 = document.querySelector(".neirongB > li .btnr");
	let lbtn1 = document.querySelector(".neirongB > li .btnl");
	let widths1 = parseInt(getComputedStyle(banner1,null).width);
//	console.log(widths1);
//	console.log(circle1,bannerimg1,banner1,lbtn1,rbtn1);

//	banner_lr(circle1,bannerimg1,banner1,rbtn1,lbtn1,widths1,"hot",2000,1)


/*左右轮播结束*/	



/*闪购选项卡开始*/
	let wrap = document.querySelector(".list-wrap");
	let wrap_box = document.querySelector("#danpinB2");
	let lbtn2 = document.querySelector(".danpinTR1");
	let rbtn2 = document.querySelector(".danpinTR2");
	//显屏的长度
	let widths2 = parseInt(getComputedStyle(wrap,null).width);
	console.log(rbtn2);
	banner_on(wrap,wrap_box,lbtn2,rbtn2,widths2,2);

/*闪购选项卡结束*/


/*内容选项卡开始*/

	let centerli = document.querySelectorAll(".jiadian:first-child .jiadianTR span");
	let centerlist = document.querySelectorAll(".jiadian:first-child .jiadianB .wrap");
	let centerli1 = document.querySelectorAll(".jiadian:nth-child(2) .jiadianTR span");
	let centerlist1 = document.querySelectorAll(".jiadian:nth-child(2) .jiadianB .wrap");
	let centerli2 = document.querySelectorAll(".jiadian:nth-child(3) .jiadianTR span");
	let centerlist2 = document.querySelectorAll(".jiadian:nth-child(3) .jiadianB .wrap");
	let centerli3 = document.querySelectorAll(".jiadian:nth-child(4) .jiadianTR span");
	let centerlist3 = document.querySelectorAll(".jiadian:nth-child(4) .jiadianB .wrap");
	let centerli4 = document.querySelectorAll(".jiadian:nth-child(5) .jiadianTR span");
	let centerlist4 = document.querySelectorAll(".jiadian:nth-child(5) .jiadianB .wrap");
	
	function cardlist (centerli,centerlist) {
		centerli[0].classList.add("hot");
		centerlist[0].style.display = "block";
		for(let i = 0; i < centerli.length; i++){		
			centerli[i].onmouseover = function () {
				for (let j = 0; j < centerli.length; j++) {
					centerlist[j].style.display = "none";
					centerli[j].classList.remove("hot");
				}
				centerlist[i].style.display = "block";
				centerli[i].classList.add("hot");
			}
		}
	}
	
	cardlist(centerli,centerlist);
	cardlist(centerli1,centerlist1);
	cardlist(centerli2,centerlist2);
	cardlist(centerli3,centerlist3);
	cardlist(centerli4,centerlist4);




/*内容选项卡结束*/


}
