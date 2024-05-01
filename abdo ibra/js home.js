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
            {"word": "group-mamis", "url": "abdo magdy/movies..it.project..HTML"}
            ,{"word": "skyscraper", "url": "abdo adel/movie.html"}
            ,{"word": "Tokyo Drift", "url": "abdo moha/Tokyo Drift.html"}
            ,{"word": "The Mummy", "url": "tarek/project 2.html"}
            ,{"word": "Peaky blinders", "url": "A Qasem/A Qasem/PK.html"}
            ,{"word": "Avengers", "url": "abdo ahmed/Filme-Page/Filme-Page/film.html"}
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
        function DarkMode() {
          document.getElementById("homebody").style.background = "#0f218a";
      }
      function lightMode() {
          document.getElementById("homebody").style.background = "#2e7285";
      }
      function DarkkMode() {
        document.getElementById("loginbody").style.background = "#0f218a";
    }
    function lighttMode() {
        document.getElementById("loginbody").style.background = "#2e7285";
    }