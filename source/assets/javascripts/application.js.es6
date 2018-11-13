'use strict';

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
      const url = '../assets/javascripts/data/path.json';
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        data.map((element, index) => {
          g.text(element.textPositon.x, element.textPositon.y, element.text).attr({ fontSize: element.fontSize + 'rem', fill: "#333" });
          g.select(element.selector).click(() => {
            g.select(element.selector).animate({ fill: 'white' }, 400);
            data.forEach((element) => {
              if (element.isClicked === false) g.select(element.selector).attr({ fill: element.color });
            });
          });
          mapPathClick(element.selector, element.text);
          g.select(element.selector).animate({ fill: element.color }, (1000 + (100 * index)), mina.bounce);
        });
      }).catch((error) => {
        console.error(error);
      });
    }

    drawMap();

  });

});

