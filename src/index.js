// import _ from 'lodash';
import { add } from 'lodash';
import './styles/style.css';

/*
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}
*/
const leftMain = document.querySelector('.left-main-dp');
const twc = document.querySelector('.tradingview-widget-container');

// document.body.appendChild(component());
// on the page it is grabbing elements by class, but not within this script
/*
window.addEventListener('load', () => {
  console.log('page is loaded');
  // eslint-disable-next-line prefer-const
  // let currentInvestment = document.querySelectorAll('.tv-widget-watch-list__short-name.apply-overflow-tooltip.js-symbol-link');
  // eslint-disable-next-line prefer-const
  let allInvestments = document.getElementsByClassName('tv-widget-watch-list__row');
  // console.log(`currentInvestment ${currentInvestment.length}`);
  console.log(`allInvestments ${allInvestments.length}`);
  console.log(document.getElementsByClassName('tv-widget-watch-list__row'));
  for (let i = 0; i < allInvestments.length; i++) {
    console.log(allInvestments[i]);
  }
});
/*

/*
  const investments = innerDoc.getElementsByClassName('tv-widget-watch-list__row');
  console.log(`allInvestments ${investments.length}`);
  console.log(investments.getElementsByClassName('tv-widget-watch-list__row'));
  for (let i = 0; i < investments.length; i++) {
    console.log(investments[i]);
  }
});
*/
/*
twc.addEventListener('click', () => {
  console.log('click');
  // eslint-disable-next-line prefer-const
  // let currentInvestment = document.querySelectorAll('.tv-widget-watch-list__short-name.apply-overflow-tooltip.js-symbol-link');
  // eslint-disable-next-line prefer-const
  let allInvestments = document.getElementsByClassName('tv-widget-watch-list__row');
  // console.log(`currentInvestment ${currentInvestment.length}`);
  console.log(`allInvestments ${allInvestments.length}`);
  console.log(document.getElementsByClassName('tv-widget-watch-list__row'));
  // tv-widget-watch-list__row js-quote-ticker tv-site-table__row tv-site-table__row--interactive tv-widget-watch-list__row--interactive quote-ticker-inited
  for (let i = 0; i < allInvestments.length; i++) {
    console.log(allInvestments[i]);
  }
});

/*
function logCurrentInvestment(target) {
  console.log('hello');
  console.log(target);
  console.log(target.value);
  console.log(target.nodeValue);
}

allInvestments.forEach((e) => {
  e.addEventListener('click', (ele) => {
    const tar = ele.target;
    logCurrentInvestment(tar);
  });
});

currentInvestment.forEach((e) => {
  e.addEventListener('click', (ele) => {
    const tar = ele.target;
    logCurrentInvestment(tar);
  });
});
*/
/*
<a href="https://www.tradingview.com/symbols/NASDAQ-AMZN/" target="_blank" data-symbol="NASDAQ:AMZN" class="
    tv-widget-watch-list__short-name
    apply-overflow-tooltip
    js-symbol-link

  ">
  AMZN
</a>
*/
