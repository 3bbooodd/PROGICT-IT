var checkbox = document.getElementById('check');
      var mainContent = document.getElementById('main2');
      checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
          mainContent.style.display = 'none';
        } else {
          mainContent.style.display = 'block';
        }
      });
      const data = [
            {"word": "group-mamis", "url": "..//abdo magdy/project it movies/movies..it.project..HTML"}
            , {"word": "skyscraper", "url": "..//abdo adel/movie.html"}
            ,{"word": "Tokyo Drift", "url": "..//abdo moha/Tokyo Drift.html"}
            ,{"word": "The Mummy", "url": "..//tarek/project 2.html"}
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