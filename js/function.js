//1.透明度轮播图
//参数：
//参数1：轮播点元素集合
//参数2：图片元素集合
//参数3：banner盒子元素
//参数4：右箭头元素
//参数5：左箭头元素
//参数6：轮播点选中时类名 （string）
//参数7：自动轮播的时间间隔
//参数8：是否自动轮播 为1时不自动其余自动
function banner_oi (circle,bannerimg,banner,rbtn,lbtn,hot,time,boole) {
	//2.定义变量
	let num = 0;
	let t = setInterval(move,time);
//	let hot;
//	let time;
	//3.初始状态 让第一张图片出现
	bannerimg[0].style.opacity = 1;
	circle[0].classList.add("hot");
	//4.点击轮播点实现轮播
	for (let i = 0; i < circle.length; i++) {
		circle[i].onclick = function  () {
			//其余图片opacity变为0  清除轮播点hot类名
			for (let j = 0; j < bannerimg.length; j++) {
				bannerimg[j].style.opacity = 0;
				circle[j].classList.remove("hot");	
			}
			//对应的图片opacity变为1
			bannerimg[i].style.opacity = 1;
			//当前轮播点添加hot类名
			circle[i].classList.add("hot");
			//点击轮播点后使得焦点形式上在本轮播点上
			num = i;
		}
	}
	//5.自动轮播
	function move (a = 1) {
//		boole = judge;
		if (boole == 1 && a == 1) {
			return;
		}
		num++;
		if (num == bannerimg.length) {
			num = 0;
		}
		//其余图片opacity变为0  清除轮播点hot类名
		for (let j = 0; j < bannerimg.length; j++) {
			bannerimg[j].style.opacity = 0;
			circle[j].classList.remove("hot");	
		}
		//对应的图片opacity变为1
		bannerimg[num].style.opacity = 1;
		//当前轮播点添加hot类名
		circle[num].classList.add("hot");		
	}
	//6.鼠标移入移出banner，暂停开始自动轮播
	//暂停
	banner.onmouseover = function () {
		clearInterval(t);
	}
	//开始
	banner.onmouseout = function () {
		t = setInterval(move,time);
	}
	//7.点击左右箭头
	rbtn.onclick = function () {
		move(0);
	}
	lbtn.onclick = function () {
		moveL();
	}
	function moveL () {	
		num--;
		if (num < 0) {
			num = bannerimg.length-1;
		}
		//其余图片opacity变为0  清除轮播点hot类名
		for (let j = 0; j < bannerimg.length; j++) {
			bannerimg[j].style.opacity = 0;
			circle[j].classList.remove("hot");	
		}
		//对应的图片opacity变为1
		bannerimg[num].style.opacity = 1;
		//当前轮播点添加hot类名
		circle[num].classList.add("hot");	
	}
	//8.窗口获取失去焦点时，开始暂停时间间隔函数
	window.onblur = function () {
		clearInterval(t);
	}
	window.onfocus = function () {
		t = setInterval(move,time);
	}	
}



//2.左右轮播图
//参数1：轮播点元素集合
//参数2：图片元素集合
//参数3：banner盒子元素
//参数4：左箭头元素
//参数5：右箭头元素
//参数6：图片元素的长度
//参数7：轮播点选中时类名 （string）
//参数8：自动轮播的时间间隔
//参数9：是否自动轮播 为1时不自动其余自动
function banner_lr (circle1,bannerimg1,banner1,rbtn1,lbtn1,widths1,hot,time,boole1) {
	//2.定义变量
	let now = 0;
	let next = 0;
	let t1 = setInterval(move1,time);
	//定义开关，当开关为true时，可点击
	let flag = true;
	//let auto = 0;
	//3.初始状态 
//	bannerimg[].style.left = +widths+"px";
//	bannerimg1[0].style.left = 0;
//	circle1[0].classList.add("hot");
	
	//4.点击轮播点实现轮播
	for (let i = 0; i < circle1.length; i++) {
		circle1[i].onclick = function  () {
			//其余图片opacity变为0  清除轮播点hot类名
			for (let j = 0; j < bannerimg1.length; j++) {
				bannerimg1[j].style.left = widths1+"px";
				circle1[j].classList.remove("hot");	
			}
			//对应的图片opacity变为1
			bannerimg1[i].style.left = 0;
			//当前轮播点添加hot类名
			circle1[i].classList.add("hot");
			//点击轮播点后使得焦点形式上在本轮播点上
			next = i;
			now = i;
		}
	}
	//5.自动轮播
	function move1 (judge = 1) {
//		boole = judge;
//		if (boole1 == 1 && judge == 1) {
//			return;
//		}
		next++;
		if (next == bannerimg1.length) {
			//循环
			next = 0;
			//截止
//			next = bannerimg1.lenght-1;
//			return;
		}
		//console.log(now,next);
//		//当前图片为now，下一张图片为next  全局变量定义在外部
		bannerimg1[now].style.left = 0;
		bannerimg1[next].style.left = widths1+"px";
		//console.log(bannerimg[now].style.left,bannerimg[next].style.left);
		animate(bannerimg1[now],{left: -widths1},function(){
			circle1[now].classList.remove("hot");
			flag = true;
		});
		animate(bannerimg1[next],{left: 0},function(){			
			for (let j = 0; j < circle1.length; j++) {
				circle1[j].classList.remove("hot");
			}
			circle1[next].classList.add("hot");
			flag = true;
		});
		now = next;		
	}
//	//6.鼠标移入移出banner，暂停开始自动轮播
//	//暂停
	banner1.onmouseover = function () {
		clearInterval(t1);
	}
//	//开始
	banner1.onmouseout = function () {
		t = setInterval(move1,time);
	}
//	//7.点击左右箭头
	rbtn1.onclick = function () {
		if (!flag) {
			return;
		}
		flag = false;		
		move1();
	}
	lbtn1.onclick = function () {	
		if (!flag) {
			return;
		}
		flag = false;
		moveL1();
	}
	function moveL1 () {
//		if (boole1 == 1 && judge == 1) {
//			return;
//		}
		next--;
		if (next == -1){	
			next = bannerimg1.length-1;
//			return;
//			next = bannerimg.length-1;		
		}	
		console.log(next);
		bannerimg1[now].style.left = 0;
		bannerimg1[next].style.left = -widths1+"px";
		animate(bannerimg1[now],{left: widths1},function(){
			circle1[now].classList.remove("hot");
			flag = true;
		});
		animate(bannerimg1[next],{left: 0},function(){
			for (let j = 0; j < circle1.length; j++) {
				circle1[j].classList.remove("hot");
			}
			circle1[next].classList.add("hot");
			flag = true;
		});
		now = next;	
	}
	
	//8.窗口获取失去焦点时，开始暂停时间间隔函数
	window.onblur = function () {
		clearInterval(t1);
	}
	window.onfocus = function () {
		t1 = setInterval(move1,time);
	}
	
}




//3.选项卡轮播
//参数1：显屏盒子
//参数2：内容盒子--长度=显屏盒子长度*显屏数量+间距*（显屏数量-1）
//参数3：左按钮
//参数4：右按钮
//参数5：显屏盒子长度
//参数6：显屏数量 
function banner_on (wrap,wrap_box,lbtn2,rbtn2,widths2,much) {
	let num = 0;
	rbtn2.onclick = function () {
		lbtn2.style.color="#999";
		num++;
		if(num == much-1){
			rbtn2.style.color="#e0e0e0";
		}
		if(num == much){		
			num = much-1;
		}
		wrap_box.style.transform="translateX("+(-widths2*num-14)+"px)";	
	}
	lbtn2.onclick=function(){
		rbtn2.style.color="#999";
		if(num == 1){
			lbtn2.style.color="#e0e0e0";
		}
		num--;
		if(num == -1){
			num = 0;
		}
		wrap_box.style.transform="translateX("+(-widths2*num)+"px)";
	}
	
}
