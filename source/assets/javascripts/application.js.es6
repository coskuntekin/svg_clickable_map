'use strict';

const pathMap = [
	{
		'selector': '#xiuwen',
		'color': '#B3E5FC',
		'isClicked': false,
		'text': '修文县',
		'fontSize': 1.5,
		'textPositon': {
			'x': 250,
			'y': 390
		}
	},
	{
		'selector': '#xifeng',
		'color': '#90CAF9',
		'isClicked': false,
		'text': '息烽县',
		'fontSize': 1.5,
		'textPositon': {
			'x': 310,
			'y': 200
		}
	},
	{
		'selector': '#kaiyang',
		'color': '#4FC3F7',
		'isClicked': false,
		'text': '开阳县',
		'fontSize': 1.5,
		'textPositon': {
			'x': 520,
			'y': 250
		}
	},
	{
		'selector': '#wudang',
		'color': '#29B6F6',
		'isClicked': false,
		'text': '乌当区',
		'fontSize': 1.3,
		'textPositon': {
			'x': 460,
			'y': 500
		}
	},
	{
		'selector': '#qingzhen',
		'color': '#03A9F4',
		'isClicked': false,
		'text': '清镇市',
		'fontSize': 1.5,
		'textPositon': {
			'x': 110,
			'y': 580
		}
	},
	{
		'selector': '#baiyun',
		'color': '#0288D1',
		'isClicked': false,
		'text': '白云区',
		'fontSize': 1.2,
		'textPositon': {
			'x': 320,
			'y': 540
		}
	},
	{
		'selector': '#guanshanhu',
		'color': '#0277BD',
		'isClicked': false,
		'text': '观山湖区',
		'fontSize': 1.1,
		'textPositon': {
			'x': 260,
			'y': 610
		}
	},
	{
		'selector': '#yunyan',
		'color': '#01579B',
		'isClicked': false,
		'text': '云岩区',
		'fontSize': 0.9,
		'textPositon': {
			'x': 358,
			'y': 640
		}
	},
	{
		'selector': '#nanming',
		'color': '#80D8FF',
		'isClicked': false,
		'text': '南明区',
		'fontSize': 1,
		'textPositon': {
			'x': 400,
			'y': 690
		}
	},
	{
		'selector': '#huaxi',
		'color': '#40C4FF',
		'isClicked': false,
		'text': '花溪区',
		'fontSize': 1.5,
		'textPositon': {
			'x': 300,
			'y': 800
		}
	}
];

let querySelector = document.querySelector.bind(document);

document.addEventListener('DOMContentLoaded', () => {

  const isLoading = querySelector('.js-is-loading');

	const g = Snap('#svg');
	g.attr({ viewBox: [0, 0, 750, 980] });

	Snap.load('assets/images/guiyang.svg', (f) => {

    isLoading.classList.add('hidden');
    
		g.append(f);

		const jsImgCity = querySelector('.js-img-city');

		function mapPathClick(path, text) {
			const imageRoots = 'assets/images/';
			g.select(path).click(() => {
				const region = path.substring(1);
				function imgCity() {
					jsImgCity.setAttribute('src', imageRoots + region + '.jpg');
					jsImgCity.classList.add('animate-name');
					querySelector('.js-path-name').textContent = (' / ' + text);
				}
				jsImgCity.classList.remove('animate-name');
				setTimeout(imgCity, 500);
			});
		};

		function drawMap() {
			pathMap.map((element, index) => {
				g.text(element.textPositon.x, element.textPositon.y, element.text).attr({ fontSize: element.fontSize + 'rem', fill: "#333" });
				g.select(element.selector).click(() => {
					g.select(element.selector).animate({ fill: 'white' }, 400);
					pathMap.forEach((element) => {
						if (element.isClicked === false) g.select(element.selector).attr({ fill: element.color });
					});
				});
				mapPathClick(element.selector, element.text);
				g.select(element.selector).animate({ fill: element.color }, (1000 + (100 * index)), mina.bounce);
			});
		}

		drawMap();

	});

});

