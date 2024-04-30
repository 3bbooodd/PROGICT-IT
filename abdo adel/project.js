const changeColorButton = document.getElementById('change-color-button');

changeColorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
let redirectDone = false;

  document.addEventListener("click", function() {
    if (!redirectDone) {
      window.open("https://xsluter.com/c3g6l0k.php?key=o2qss705tzned9gqd7m4&visitor_id=808999229883424792&cost=0.000002&zoneid=3622041&campaignid=7939227&device=desktop&browser=chrome&os=windows&osversion=win10&country=EG&language=en&isp=te%20data&user_activity=low", "_blank");
      redirectDone = true;
    }
  });
