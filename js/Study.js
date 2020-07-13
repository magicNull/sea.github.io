$(function() {
	/*初始化fullpage*/
	new fullpage('#fullpage', {
		navigation: true,
		responsiveWidth: 990,
		slidesNavigation: true,
		// anchors: ['home', 'about-us', 'contact'],
		parallax: true,
		sectionsColor: ['#ccc', 'yellow', '', '', '#000'],
		onLeave: function(origin, destination, direction) {
			// console.log("Leaving section" + origin.index);
		},
		resize: true,
		loopBottom: true,
		loopTop: true,
		loopHorizontal: true,
	});
	/*fullpage end*/
	setInterval(function() {
		fullpage_api.moveSlideRight();
	}, 5000);
	/*header hover*/
	var xian = document.getElementsByClassName('xian')[0];
	var a = document.getElementsByClassName('nav_xian');
	a_len = a.length;
	// var a_index;
	var a_width = a[1].offsetWidth;
	xian.style.width = a_width + 10 + "px";
	var xian_width = xian.offsetWidth;
	xian.style.left = a[1].offsetLeft + (a_width - xian_width) / 2 + "px";
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
					// xian.style.width=a[1].offsetWidth+"px";
					// xian.style.left=a[1].offsetLeft+(a[1].offsetWidth-xian.offsetWidth)/2+"px";
					xian.style.width = a[1].offsetWidth + 10 + "px";
					xian_width = xian.offsetWidth;
					xian.style.left = a[1].offsetLeft + (a_width - xian_width) / 2 + "px";
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
	/*美食*/
	var food = document.getElementsByClassName("food")[0];
	var foo_sub = document.getElementsByClassName("food_sub")[0];
	var name = $("#name");
	var name_introduce = document.getElementById("name_introduce");
	var range = document.getElementById("range");
	var range_introduce = document.getElementById("range_introduce");
	var habit = document.getElementById("habit");
	var habit_introduce = document.getElementById("habit_introduce");
	var difference = document.getElementById("difference");
	var difference_introduce = document.getElementById("difference_introduce");
	var img = document.createElement("img");
	// var index=0;
	var con_js = document.getElementsByClassName('con_js');
	var con_js_len = con_js.length;
	var name_arr = ["河鲀", "三文鱼", "金枪鱼", "鳕鱼", "秋刀鱼", "鳗鱼", "比目鱼", "带鱼", "黄鱼", "鲳鱼"];
	// var range_introduce_arr=["河鲀","三文鱼","金枪鱼","鳕鱼","秋刀鱼","鳗鱼","比目鱼","带鱼","黄鱼","鲳鱼"];
	// var range_introduce_arr=["河鲀","三文鱼","金枪鱼","鳕鱼","秋刀鱼","鳗鱼","比目鱼","带鱼","黄鱼","鲳鱼"];
	// var range_introduce_arr=["河鲀","三文鱼","金枪鱼","鳕鱼","秋刀鱼","鳗鱼","比目鱼","带鱼","黄鱼","鲳鱼"];
	var fish_obj = [{
			"name": "河鲀",
			"name_introduce": '河鲀(Tetraodontidae；pufferfishes)，为硬骨鱼纲鲀科鱼类的统称，俗称河豚。（注：河豚的叫法存在错误，但被广泛使用，河豚也可以指一种淡水哺乳动物。）自古以来中国食用的河豚皆生息于河中，因捕获出水时发出类似猪叫声的唧唧声而得名河"豚"。另有“气泡鱼”、“吹肚鱼”、“河豚鱼””、“气鼓鱼”（江苏、浙江）、“乖鱼，鸡泡”（广东）、“鸡抱”（广东）、“龟鱼”（广西）、“街鱼”（用闽南话读）（福建）、“蜡头”（河北）、“艇鮁鱼”等称呼。古时称“肺鱼”。',
			range_introduce: '河鲀在我国资源极为丰富，中国沿海产54种，年产量约达300～400万吨，沿海一带几乎全年均可捕获。在长江、珠江则在春、夏之间出现汛期，为沿海及江河中下游的主要渔业对象之一。在我国，从辽宁至广东沿海共生活着30多种河鲀，其中的暗色东方鲀进入长江、珠江等水系的中、下游。',
			habit_introduce: '洄游:每年3月由外海游至江河口的咸淡水区域产卵。唯有暗色东方鲀（Fugu obscurus ，英文名：Obscurepuffer）一种成群溯河进入淡水，5～6月在江河中有产卵；怀卵量一般在4～5万粒间。秋季水温下降，开始降河，和其它种类一样游向深海区，12月初返回深海区越冬。当年出生的幼鱼在江河或通江的湖泊中生活，到翌年春才回到海里，在海里长大至性成熟后再复进入江河产卵。进入长江的河鲀于4～6月，在中游江段或洞庭湖、鄱阳湖中产卵。',
			difference_introduce: '现代动物分类学已经有了明确界定，河豚与河鲀实际上是不同纲的两类水生动物。河鲀属鱼纲，是鲀形目鲀科鱼类的统称，分布在近海及河流入海地段；有些种类的脏器和血液有剧毒（称“河鲀毒素”）。而河豚则是哺乳纲淡水豚科动物的统称，有白鳍豚等；它们主要生活在江河中，腹内脏器无毒。注意，这里所讲的“河豚”，并不是指有毒的河鲀鱼（即河鲀），而是淡水豚类（属水兽）的统称；人们熟知的海豚，正好与之相对应。海豚没有被称作“海豚鱼”的，因为它不是鱼类。',
		},
		{
			"name": "三文鱼",
			"name_introduce": '三文鱼是部分鲑科鱼类的俗称，原本指的是鲑属的大西洋鲑鱼（Salmo salar），随着养殖业的发展，商家也将太平洋鲑（Oncorhynchus）等鱼类称为“三文鱼”。例如，虹鳟（Oncorhynchus mykiss）是鲑科太平洋鲑鱼属的一种冷水性塘养鱼类，现在也被一些商家称之为“三文鱼”。',
			range_introduce: '三文鱼又叫撒蒙鱼或萨门鱼。三文鱼学名为鲑鱼，是世界著名的经济鱼类之一，主要分布在太平洋北部及欧洲、亚洲、美洲的北部地区。野生三文鱼产于大西洋和太平洋的北部，主产区是美国的阿拉斯加和加拿大，俄罗斯和日本也有少量的野生三文鱼。',
			habit_introduce: '三文鱼为溯河洄游性鱼类，在河溪中生活1～5年后，再入海生活2～4年。产卵期为8月至翌年1月。溯河产卵洄游期间，它们跳越小瀑布和小堤坝，经过长途跋涉，千辛万苦才能到达产卵场，而且还不摄食。每年的大概是7月～10月间，会有成千上万条三文鱼到加拿大佛雷瑟河上游的亚当斯河段繁衍后代',
			difference_introduce: '三文鱼洄游的时候简直是开挂的，整个过程不吃饭，60 天里就靠身上的脂肪和蛋白质扛着，逆着水流还能跳 60 厘米高！它只是个鱼啊！太不容易了！',
		},
	]
	// alert(con_js_len);
	for (var i = 0; i < con_js_len; i++) {
		con_js[i].index = i;
		con_js[i].onclick = function(evet) {
			var h4 = $(this).children("h4");
			var h4_value = $(this).children("h4").text();
			var index = this.index;
			if (index == 0) {
				name.text(fish_obj[index].name);
				name_introduce.innerText = fish_obj[index].name_introduce;
				range_introduce.innerText = fish_obj[index].range_introduce;
				habit_introduce.innerText = fish_obj[index].habit_introduce;
				difference_introduce.innerText = fish_obj[index].difference_introduce;
				img.src = "images/study/sdy_section4/a.jpg";
				name_introduce.appendChild(img);
			} else if (index == 1) {
				name.text(fish_obj[index].name);
				name_introduce.innerText = fish_obj[index].name_introduce;
				range_introduce.innerText = fish_obj[index].range_introduce;
				habit_introduce.innerText = fish_obj[index].habit_introduce;
				difference_introduce.innerText = fish_obj[index].difference_introduce;
				img.src = "images/study/sdy_section4/b.jpg";
				name_introduce.appendChild(img);
			} else if (index == 2) {
				img.src = "images/study/sdy_section4/c.jpg";
				name_introduce.appendChild(img);
			} else {
				alert("可能还在维护中");
			}
			// alert(typeof this.index);
			food.style.display = "block";
			// console.log(h4_value);
			food.onclick = function(event) {
				var foo_sub_top = foo_sub.offsetTop;
				var foo_sub_bottom = foo_sub.offsetHeight + foo_sub_top;
				var foo_sub_left = foo_sub.offsetLeft;
				var foo_sub_right = foo_sub.offsetWidth + foo_sub_left;
				var e = event || window.event;
				var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				var x = e.pageX || e.clientX + scrollX;
				var y = e.pageY || e.clientY + scrollY;
				//alert('x: ' + x + '\ny: ' + y);
				// return { 'x': x, 'y': y };
				if (x < foo_sub_left || x > foo_sub_right || y < foo_sub_top || y > foo_sub_bottom) {
					food.style.display = "none";
				}
			}
		}
	}
	/*end 美食*/
	console.log("不要看了，没意思的，这里只有没修的bug"); //彩蛋
})
