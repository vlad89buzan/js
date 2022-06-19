window.addEventListener("DOMContentLoaded", () => {
  //tabs
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //timer
  const deadline = "2022-07-11";
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 0) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function declension(forms, val) {
    const cases = [ 2, 0, 1, 1, 1, 2 ];
    return forms[(val % 100 > 4 && val % 100 < 20) ?
       2 : cases[(val % 10 < 5) ? val % 10 : 5]];
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    const daysText = document.querySelector("#daysText");
    const hoursText = document.querySelector("#hoursText");
    const minutesText = document.querySelector("#minutesText");
    const secondsText = document.querySelector("#secondsText");
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      daysText.innerHTML = declension([ 'день', 'дня', 'дней' ],
       days.innerHTML);
      hoursText.innerHTML = declension([ 'час', 'часа', 'часов' ],
       hours.innerHTML);
      minutesText.innerHTML = declension([ 'минута', 'минуты', 'минут' ],
       minutes.innerHTML);
      secondsText.innerHTML = declension([ 'секунда', 'секунды', 'секунд' ],
       seconds.innerHTML);
      

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);
});
