$(function() {
	/*初始化fullpage*/
	new fullpage('#fullpage', {
		navigation: true,
		responsiveWidth: 990,
		slidesNavigation: true,
		// anchors: ['home', 'about-us', 'contact'],
		parallax: true,
		sectionsColor: ['#ccc', 'yellow', '', '', '', '#000'],
		onLeave: function(origin, destination, direction) {
			// console.log("Leaving section" + origin.index);
		},
		resize: true,
		loopBottom:true,
		loopTop:true,
		loopHorizontal:true,
	});
	/*fullpage end*/
	setInterval(function(){
   fullpage_api.moveSlideRight();
	},5000);
	/*header hover*/
	var xian = document.getElementsByClassName('xian')[0];
	var a = document.getElementsByClassName('nav_xian');
	a_len = a.length;
	// var a_index;
	var a_width = a[0].offsetWidth;
	xian.style.width = a_width + 10 + "px";
	var xian_width = xian.offsetWidth;
	xian.style.left = a[0].offsetLeft + (a_width - xian_width) / 2 + "px";
	for (var i = 0; i < a_len; i++) {
		//遍历鼠标移动事件
		if (i == 2) {
			// return;
			//bug 记号
		} else {
			a[i].onmouseover = function() {
				// alert(this.offsetWidth);
				//元素的宽度
				a_width = this.offsetWidth;
				xian.style.width = a_width + 10 + "px";
				xian_width = xian.offsetWidth;
				xian.style.left = this.offsetLeft + (a_width - xian_width) / 2 + "px";
				this.onmouseout = function() {
					// xian.style.left="";
					// xian.style.width=a[0].offsetWidth+"px";
					// xian.style.left=a[0].offsetLeft+(a[0].offsetWidth-xian.offsetWidth)/2+"px";
					xian.style.width = a[0].offsetWidth + 10 + "px";
					xian_width = xian.offsetWidth;
					xian.style.left = a[0].offsetLeft + (a_width - xian_width) / 2 + "px";
					// xian.style.setProperty('width', '40px', 'important');
				}
			}
		}

	}
	/*header hover end*/
	/*header 隐藏*/
	$('#navlog_2').click(function(ev) {
		$('header').css({
			"display": "none"
		});
		$(".navlogo").css({
			"display": "block"
		});
		$(this).css({
			"display": "none"
		});
	});
	$(".navlogo").click(function() {
		$('header').css({
			"display": "block"
		});
		$(this).css({
			"display": "none"
		});
		$('#navlog_2').css({
			"display": "block"
		});
	})
	// var none=$('header').css("display");
	// if(none=="none"){
	// 	alert(123);
	// }
	// alert($('header').css("display"));
	/*header 隐藏 end*/
	/*tab 鼠标经过切换*/
	// $('[data-toggle="tooltip"]').tooltip();//bug 记号
	// $('#home-tab').hover(function() {
	// 	$(this).tab('show');
	// });
	/*tab 鼠标经过切换 end*/
	/*fotter*/
	var all_img = document.getElementsByClassName("img_footer");
	var footer_img = document.getElementsByClassName("footer_call_img")[0];
	var footer_img_width = footer_img.offsetWidth;
	// footer_img.onclick=function(){
	// 	alert(1);
	// }
	var all_img_len = all_img.length;
	for (var i = 0; i < all_img_len; i++) {
		all_img[i].onmouseover = function() {
			footer_img.style.opacity = 1;
			// alert(123);
			var all_left = this.offsetLeft;
			var all_width = this.offsetWidth;
			// alert(all_width);
			// alert(footer_img.style.left);
			footer_img.style.left = all_left + (all_width - footer_img_width) / 2 + "px";
			this.onmouseout = function() {
				footer_img.style.opacity = 0;
			}
		}
	}

	// var allFooterImg=$(".footer_call img");
	// var footer_call_img=$(".footer_call_img");
	// // footer_call_img.style.left
	// // footer_call_img.click(function(){
	// // 	alert(123);
	// // });
	// // alert(allFooterImg.length);
	// allFooterImg.mousemove(function(){
	// 	// alert(footer_call_img.css("left"));
	// 	// alert($(this).width());
	// 	var left=$(this).offset().left;
	// 	alert(left);
	// 	var width=$(this).width();
	// 	footer_call_img.css("left",left);
	// 	alert(footer_call_img.css("left"));
	// 	$(this).mouseout(function(){
	// 		$(this).css("background","");
	// 	});
	// });
	// var qq=document.getElementsByClassName("qq")[0];
	// alert(qq.offsetLeft);
	/*fotter end*/
	/*sub*/
	$('#sub').click(function() {
		alert("感谢你的建议");
	});
	/*sub end*/

	/*玩偶*/
	var test = document.getElementsByClassName('wanou')[0];
	var val = document.getElementById('val');
	var all = ['海洋是什么', '深海有多深', '世界十大海', '太平洋多大', '世界五大洋？', '我可爱吗？'];
	var all_len = all.length;
	var index = 0;
	// val.onclick=function(){
	// alert(123);
	// val.innerText=all[0];
	setInterval(function() {
		// alert(index++);
		if (index >= all_len) {
			// alert(123);
			index = 0;
		} else {
			// alert(index);
			val.innerHTML = all[index];
			// index++;
			index = Math.floor(Math.random() * 10);
		}
	}, 1000);
	/*玩偶*/
	drag(test);

	function drag(obj) {
		//当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
		obj.onmousedown = function(event) {
			obj.setCapture && obj.setCapture();
			event = event || window.event;
			//div的偏移量 鼠标.clentX - 元素.offsetLeft
			//div的偏移量 鼠标.clentY - 元素.offsetTop
			var ol = event.clientX - obj.offsetLeft;
			var ot = event.clientY - obj.offsetTop;
			//为document绑定一个onmousemove事件
			document.onmousemove = function(event) {
				event = event || window.event;
				//当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
				//获取鼠标的坐标
				var left = event.clientX - ol;
				var top = event.clientY - ot;

				//修改元素的位置
				obj.style.left = left + "px";
				obj.style.top = top + "px";

			};
			//为document绑定一个鼠标松开事件
			document.onmouseup = function() {
				//当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
				//取消document的onmousemove事件
				document.onmousemove = null;
				//取消document的onmouseup事件
				document.onmouseup = null;
				//当鼠标松开时，取消对事件的捕获
				obj.releaseCapture && obj.releaseCapture();
			};
			return false;
		};
	}
	/*玩偶 end*/
	/*登录*/
	// var wanou_a=document.getElementsByClassName('wanou_a')[0];
	// wanou_a.onclick=function(){
	// 	// alert(123);
	// }
	var btn1 = document.getElementById('btn1');
	var con = document.getElementById('con');
	var con_son = document.getElementById('con_son');
	btn1.onclick = function() {
		con.style.display = "block";
		// con.onclick=function(){
		// 	con.style.display="none";
		// }
		// if(con.style.display=="block"){
		con.onclick = function(event) {
			var con_son_top = con_son.offsetTop;
		var con_son_bottom = con_son.offsetHeight + con_son_top;
		var con_son_left = con_son.offsetLeft;
		var con_son_right = con_son.offsetWidth + con_son_left;
			var e = event || window.event;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			var x = e.pageX || e.clientX + scrollX;
			var y = e.pageY || e.clientY + scrollY;
			//alert('x: ' + x + '\ny: ' + y);
			// return { 'x': x, 'y': y };
			if (x < con_son_left || x > con_son_right || y < con_son_top || y > con_son_bottom) {
				con.style.display = "none";
			}
		}
		// }

	}
	/*登录end*/
	console.log("不要看了，没意思的，这里只有没修的bug"); //彩蛋
})
