fetch("https://api.pexels.com/v1/search?query=hamsters", {
  headers: {
    Authorization: "eBU0BhLEpFR65eoumO5N0vC87WehbuxkobNzDXtzFwLVTvHOg50IsAq6",
  },
})
  .then((responseObj) => {
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((hamsters) => {
    console.log(hamsters.photos);

    let load1 = document.querySelector(".loadFirst");

    load1.addEventListener("click", () => {
      let imagesPet = document.querySelectorAll(".card-img-top");
      let id = document.querySelectorAll(".text-muted");

      hamsters.photos.forEach((hamster, index) => {
        if (imagesPet[index]) {
          imagesPet[index].src = hamster.src.medium;
        }
        if (id[index]) {
          id[index].innerText = hamster.id;
        }
      });
    });
  })
  .catch((err) => console.log(err));

fetch("https://api.pexels.com/v1/search?query=tigers", {
  headers: {
    Authorization: "eBU0BhLEpFR65eoumO5N0vC87WehbuxkobNzDXtzFwLVTvHOg50IsAq6",
  },
})
  .then((responseObj) => {
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((tigers) => {
    console.log(tigers.photos);

    let load1 = document.querySelector(".loadSecond");

    load1.addEventListener("click", () => {
      let imagesPet = document.querySelectorAll(".card-img-top");
      let id = document.querySelectorAll(".text-muted");

      tigers.photos.forEach((tiger, index) => {
        if (imagesPet[index]) {
          imagesPet[index].src = tiger.src.medium;
        }
        if (id[index]) {
          id[index].innerText = tiger.id;
        }
      });
    });
  })
  .catch((err) => console.log(err));

let edit = document.querySelectorAll(".edit");

edit.forEach((element) => {
  element.innerText = "Hide";
  element.addEventListener("click", () => {
    element.closest(".card").remove();
  });
});
