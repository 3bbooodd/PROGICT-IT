const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      if (i >= index) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
  });
});

const reviewText = document.getElementById('review-text');
const submitReviewBtn = document.getElementById('submit-review');
const reviewsContainer = document.getElementById('reviews-container');

submitReviewBtn.addEventListener('click', () => {
  const review = reviewText.value.trim();
  if (review) {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');

    const reviewParagraph = document.createElement('p');
    reviewParagraph.textContent = review;
    reviewElement.appendChild(reviewParagraph);

    reviewsContainer.appendChild(reviewElement);

    reviewText.value = '';
  }
});



const data = [
  {"word": "group-mamis", "url": "file:///D:/project%20it/group%20mamis.html"}, {"word": "Action", "url": "https://witanime.quest/"}
];
const input = document.getElementById("myInput");
const searchBtn = document.getElementById("searchBtn");
const autocompleteList = document.getElementById("autocomplete-list");
input.addEventListener("input", function() {
  const inputValue = this.value.toLowerCase();
  autocompleteList.innerHTML = "";
  const filteredData = data.filter(item =>
      item.word.toLowerCase().startsWith(inputValue)
  );
  filteredData.forEach(item => {
      const divItem = document.createElement("div");
      divItem.classList.add("autocomplete-item");
      divItem.textContent = item.word;
      divItem.addEventListener("click", function() {
          input.value = item.word;
          autocompleteList.innerHTML = "";
      });
      autocompleteList.appendChild(divItem);
  });
});
searchBtn.addEventListener("click", function() {
  const inputValue = input.value;
  const item = data.find(item => item.word.toLowerCase() === inputValue.toLowerCase());
  if (item) {
      window.location.href = item.url;
  }
});

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

  