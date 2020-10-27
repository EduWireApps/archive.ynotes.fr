(function () {
  "use strict";

  var error = false;
  var listUrl = [];
  var exceptionsUsers = ["ModernChocolate"];
  var exceptionAdded = false;
  window.addEventListener("load", function () {
    document.getElementById("date").innerHTML = new Date().getFullYear();
    loadContributors();

    if (!error) {
      document.getElementById("contributors").innerHTML = "";
    }

    var menu = document.getElementById("menu"),
      brand = document.getElementById("brand");

    document
      .getElementById("menuToggle")
      .addEventListener("click", function () {
        menu.classList.toggle("h-0");
        this.classList.toggle("is-active");
        menu.classList.toggle("-translate-x-full");
        menu.classList.toggle("opacity-0");
        brand.classList.toggle("mb-4");
      });
  });

  function loadContributors() {
    requestApi(
      "https://api.github.com/repos/ModernChocolate/ynotes/contributors",
      true
    );
    requestApi(
      "https://api.github.com/repos/ModernChocolate/ynotes-website/contributors",
      false
    );
  }

  function requestApi(url, app) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status == 200) {
        var users = JSON.parse(this.responseText);
        for (var i in users) {
          createUserWidget(
            users[i].login,
            users[i].html_url,
            users[i].avatar_url,
            users[i].contributions,
            app
          );
        }
      } else {
        error = true;
      }
    };
    xhr.send();
  }

  function createUserWidget(
    name,
    url,
    img_url,
    contributions,
    app,
    customSentence
  ) {
    if (!exceptionAdded) {
      name = "ModernChocolate (JsonLines)";
      url = "https://github.com/ModernChocolate";
      img_url = "https://avatars1.githubusercontent.com/u/45465075?v=4";
      contributions = 4;
      app = false;
      customSentence = "Initiateur du projet.";
      exceptionAdded = true;
    }

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
    if (customSentence != null) {
      contribution.innerHTML = customSentence;
      document.getElementById("contributors").appendChild(main);
    } else if (!exceptionsUsers.includes(name)) {
      //Check if this user is already on the page
      if (listUrl.includes(url)) {
        contribution.innerHTML = "A contribué au site web et à l'application.";
        //Delete the old one
        if (document.getElementById("contributors").children.length > 0) {
          for (var i in document.getElementById("contributors").children) {
            if (
              document.getElementById("contributors").children.item(i) !=
                null &&
              document
                .getElementById("contributors")
                .children.item(i)
                .children.item(0).href === url
            ) {
              console.log("delete");
              document.getElementById("contributors").children.item(i).remove();
            }
          }
        }
      } else {
        if (app) {
          contribution.innerHTML = "A contribué à l'application.";
        } else {
          contribution.innerHTML = "A contribué au site web.";
        }
        listUrl.push(url);
      }
      document.getElementById("contributors").appendChild(main);
    }
  }
})();
