(function () {
  "use strict";

  window.addEventListener("load", function () {
    loadContributors();
    document.getElementById("date").innerHTML = new Date().getFullYear()
  });

  function loadContributors() {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://api.github.com/repos/ModernChocolate/ynotes/contributors",
      true
    );

    xhr.onload = function () {
      if (this.status == 200) {
        document.getElementById("contributors").innerHTML = "";
        var users = JSON.parse(this.responseText);
        var e = document.createElement("div");
        e.classList = "bg-red-500";
        for (var i in users) {
          createUserWidget(
            users[i].login,
            users[i].html_url,
            users[i].avatar_url,
            users[i].contributions
          );
        }
      }
    };

    xhr.send();
  }

  function createUserWidget(name, url, img_url, contributions) {
    var main = document.createElement("div"),
      content = document.createElement("a"),
      avatar = document.createElement("img"),
      infos = document.createElement("div"),
      username = document.createElement("h2"),
      contribution = document.createElement("p");
    main.appendChild(content);
    content.appendChild(avatar);
    content.appendChild(infos);
    infos.appendChild(username);
    infos.appendChild(contribution);
    main.classList = "p-2 lg:w-1/3 md:w-1/2 w-full";
    content.classList =
      "h-full flex items-center border-gray-200 border p-4 rounded-lg shadow bg-gray-100";
    content.href = url;
    content.target = "_blank";
    content.rel = "noopener noreferrer";
    avatar.classList =
      "w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 border-2 border-gray-500";
    avatar.src = img_url;
    avatar.alt = name;
    infos.classList = "flex-grow";
    username.classList = "text-gray-900 title-font font-medium";
    contribution.classList = "text-gray-500";
    username.innerHTML = name;
    contribution.innerHTML = "A contribué " + contributions + " fois";

    document.getElementById("contributors").appendChild(main);
  }
})();
