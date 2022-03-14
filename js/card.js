//
// Credit Cards
//

window.addEventListener("DOMContentLoaded", (event) => {
  null !== (card = document.querySelector(".credit-card-form")) &&
    new Card({
      form: card,
      container: ".credit-card-wrapper",
    });
});
