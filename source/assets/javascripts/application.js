// Avoid `console` errors in browsers that lack a console.
	(function() {
		var method;
		var noop = function () {};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());

// Place any jQuery/helper plugins in here.

$(window).load(function(){

	var g = Snap('#svg');
	g.attr({
		viewBox: [0, 0, 750, 980]
	});

	Snap.load("assets/images/guiyang.svg", function (f) {

		g.append(f);

		$('.js-map-layout').removeClass('hidden');
		$('.js-map-loading').addClass('hidden');

		var jsMapPin = $('.js-map-marker');
		var jsImgCity = $('.js-img-city');

		//
		//#### Map Path Click Function
		//----------------------------
		var mapPathClick = function (path, city) {
			var imageRoots = 'assets/images/';
			path.click(function () {
				jsMapPin.attr('data-city', city);
				if (jsMapPin.data('city') === city) {
					jsMapPin.addClass('active');
				} else {
				}
				function imgCity() {
					jsImgCity.attr({
						src: imageRoots + city + '.jpg'
					});
					jsImgCity.addClass('animate-name');
					$('.js-path-name').text(" / "+city)
				}
				jsImgCity.removeClass('animate-name');
				setTimeout(imgCity, 500);
			});
		};

		var active = 0;

		//
		//#### XIUWEN
		//----------------------------
		var xiuwenPath = g.select("#xiuwen");

		xiuwenPath.animate({
			fill: '#B3E5FC'
		}, 1100);

		var xiuwenTxt = g.text(230, 390, "修文县").attr({
			fontSize: "30px",
			fill: "#333"
		});

		xiuwenPath.click(function () {
			active = 1;
			if (active === 1) {
				xiuwenPath.animate({
					fill: 'white'
				}, 400);
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		mapPathClick(xiuwenPath, 'xiuwen');

		//
		//#### XIFENG
		//----------------------------

		var xifengPath = g.select("#xifeng");

		var xifengTxt = g.text(280, 230, "息烽县").attr({
			fontSize: "30px",
			fill: "#333"
		});

		xifengPath.click(function () {
			active = 2;
			if (active === 2) {
				xifengPath.animate({
					fill: 'white'
				}, 400);
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		mapPathClick(xifengPath, 'xifeng');

		xifengPath.animate({
			fill: '#90CAF9'
		}, 1100, mina.bounce);

		//
		//#### KAIYANG
		//----------------------------

		var kaiyangPath = g.select("#kaiyang");

		var kaiyangTxt = g.text(500, 250, "开阳县").attr({
			fontSize: "30px",
			fill: "#333"
		});

		kaiyangPath.click(function () {
			active = 3;
			if (active === 3) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.animate({
					fill: 'white'
				}, 400);
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		mapPathClick(kaiyangPath, 'kaiyang');

		kaiyangPath.animate({
			fill: '#4FC3F7'
		}, 1300, mina.bounce);

		//
		//#### WUDANG
		//----------------------------

		var wudangPath = g.select("#wudang");

		var wudangTxt = g.text(450, 500, "乌当区").attr({
			fontSize: "30px",
			fill: "#333"
		});

		mapPathClick(wudangPath, 'wudang');

		wudangPath.animate({
			fill: '#29B6F6'
		}, 1400, mina.bounce);

		wudangPath.click(function () {
			active = 4;
			if (active === 4) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.animate({
					fill: 'white'
				}, 400);
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### QINGZEN
		//----------------------------

		var qingzhenPath = g.select("#qingzhen");

		var qingzhenTxt = g.text(80, 550, "清镇市").attr({
			fontSize: "30px",
			fill: "#333"
		});

		mapPathClick(qingzhenPath, 'qingzhen');

		qingzhenPath.animate({
			fill: '#03A9F4'
		}, 1500, mina.bounce);

		qingzhenPath.click(function () {
			active = 5;
			if (active === 5) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.animate({
					fill: 'white'
				}, 400);
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### BAIYUN
		//----------------------------

		var baiyunPath = g.select("#baiyun");

		var baiyunTxt = g.text(315, 530, "白云区").attr({
			fontSize: "25px",
			fill: "#333"
		});

		mapPathClick(baiyunPath, 'baiyun');

		baiyunPath.animate({
			fill: '#0288D1'
		}, 1700, mina.bounce);

		baiyunPath.click(function () {
			active = 6;
			if (active === 6) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.animate({
					fill: 'white'
				}, 400);
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### GUANSHANHU
		//----------------------------

		var guanshanhuPath = g.select("#guanshanhu");

		var guanshanhuTxt = g.text(250, 610, "观山湖区").attr({
			fontSize: "20px",
			fill: "#333"
		});

		mapPathClick(guanshanhuPath, 'guanshanhu');

		guanshanhuPath.animate({
			fill: '#0277BD'
		}, 1800, mina.bounce);

		guanshanhuPath.click(function () {
			active = 7;
			if (active === 7) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.animate({
					fill: 'white'
				}, 400);
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### YUNYAN
		//----------------------------

		var yunyanPath = g.select("#yunyan");

		var yunyanTxt = g.text(358, 640, "云岩区	").attr({
			fontSize: "15px",
			fill: "#333"
		});

		mapPathClick(yunyanPath, 'yunyan');

		yunyanPath.animate({
			fill: '#01579B'
		}, 1900, mina.bounce);

		yunyanPath.click(function () {
			active = 8;
			if (active === 8) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.animate({
					fill: 'white'
				}, 400);
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### NANMING
		//----------------------------

		var nanmingPath = g.select("#nanming");

		var nanmingTxt = g.text(390, 680, "云岩区	").attr({
			fontSize: "20px",
			fill: "#333"
		});

		mapPathClick(nanmingPath, 'nanming');

		nanmingPath.animate({
			fill: '#80D8FF'
		}, 2000, mina.bounce);

		nanmingPath.click(function () {
			active = 9;
			if (active === 9) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.animate({
					fill: 'white'
				}, 400);
				huaxiPath.attr({
					fill: '#40C4FF'
				});
			} else {
			}
		});

		//
		//#### HUAXI
		//----------------------------

		var huaxiPath = g.select("#huaxi");

		var huaxiTxt = g.text(300, 800, "花溪区").attr({
			fontSize: "30px",
			fill: "#333"
		});

		huaxiPath.click(function () {
			active = 10;
			if (active === 10) {
				xiuwenPath.attr({
					fill: '#B3E5FC'
				});
				xifengPath.attr({
					fill: '#90CAF9'
				});
				kaiyangPath.attr({
					fill: '#4FC3F7'
				});
				wudangPath.attr({
					fill: '#29B6F6'
				});
				qingzhenPath.attr({
					fill: '#03A9F4'
				});
				baiyunPath.attr({
					fill: '#0288D1'
				});
				guanshanhuPath.attr({
					fill: '#0277BD'
				});
				yunyanPath.attr({
					fill: '#01579B'
				});
				nanmingPath.attr({
					fill: '#80D8FF'
				});
				huaxiPath.animate({
					fill: 'white'
				}, 400);
			} else {
			}
		});

		mapPathClick(huaxiPath, 'huaxi');

		huaxiPath.animate({
			fill: '#40C4FF'
		}, 2100, mina.bounce);
	});
});
