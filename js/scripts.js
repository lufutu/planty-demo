/*!
* Start Bootstrap - Plants Template v0.0.1 (https://lufutu.com)
* Copyright 2013-2022 Lufutu
* Licensed under MIT (https://github.com/StartBootstrap/plants-theme/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //Parallax
  const scenes = document.getElementsByClassName("scene");
  for (var i = 0; i < scenes.length; ++i) {
    const scene = scenes[i];
    const parallaxInstance = new Parallax(scene);
  }

  // FAQs
  const accordionItems = document.querySelectorAll(".questions-item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions-header");

    accordionHeader.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-open");

      toggleItem(item);

      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });

  const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions-content");

    if (item.classList.contains("accordion-open")) {
      accordionContent.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
    }
  };

  // Cart Quantity

  let inputGroup = document.querySelectorAll(".input-group.number");
  inputGroup.forEach((el) => {
    let inputAppend = el.querySelector(".input");
    el.addEventListener("click", (el) => {
      if (el.target.classList.contains("btn-plus")) {
        inputAppend.value++;
      } else if (el.target.classList.contains("btn-minus")) {
        if (inputAppend.value > 0) {
          inputAppend.value--;
        }
      }
    });
  });

  // Widget filter in Shopping
  const filters = document.getElementsByClassName("widget-filter");
  for (var i = 0; i < filters.length; ++i) {
    const filter = filters[i];
    const query = filter.querySelector(".widget-filter-search"),
      items = filter
        .querySelector(".widget-filter-list")
        .querySelectorAll(".widget-filter-item");
    if (!query) return;
    query.addEventListener("keyup", function () {
      for (var e = query.value.toLowerCase(), t = 0; t < items.length; t++)
        -1 <
        items[t]
          .querySelector(".widget-filter-item-text")
          .innerHTML.toLowerCase()
          .indexOf(e)
          ? items[t].classList.remove("d-none")
          : items[t].classList.add("d-none");
    });
  }

  // Range Slider
  const rangeSliders = document.getElementsByClassName("range-slider");
  for (var i = 0; i < rangeSliders.length; ++i) {
    const rangeSlider = rangeSliders[i];
    const ui = rangeSlider.querySelector(".range-slider-ui"),
      min = rangeSlider.querySelector(".range-slider-value-min"),
      max = rangeSlider.querySelector(".range-slider-value-max"),
      data = {
        dataStartMin: parseInt(rangeSlider.dataset.startMin, 10),
        dataStartMax: parseInt(rangeSlider.dataset.startMax, 10),
        dataMin: parseInt(rangeSlider.dataset.min, 10),
        dataMax: parseInt(rangeSlider.dataset.max, 10),
        dataStep: parseInt(rangeSlider.dataset.step, 10),
      };
    noUiSlider.create(ui, {
      start: [data.dataStartMin, data.dataStartMax],
      connect: !0,
      step: data.dataStep,
      pips: {
        mode: "count",
        values: 5,
      },
      tooltips: !0,
      range: {
        min: data.dataMin,
        max: data.dataMax,
      },
      format: {
        to: function (e) {
          return "$" + parseInt(e, 10);
        },
        from: function (e) {
          return Number(e);
        },
      },
    });
    ui.noUiSlider.on("update", function (e, t) {
      e = (e = e[t]).replace(/\D/g, "");
      t ? (max.value = Math.round(e)) : (min.value = Math.round(e));
    });
    min.addEventListener("change", function () {
      ui.noUiSlider.set([this.value, null]);
    });
    max.addEventListener("change", function () {
      ui.noUiSlider.set([null, this.value]);
    });
  }

  // Popover
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Password Toggle
  const password_toggles = document.querySelectorAll(".password-toggle");
  for (var i = 0; i < password_toggles.length; ++i) {
    const password_toggle = password_toggles[i];
    const form_control = password_toggle.querySelector(".form-control");
    const toggle_button = password_toggle.querySelector(".password-toggle-btn");
    toggle_button.addEventListener("click", function (e) {
      if ("checkbox" === e.target.type) {
        if (e.target.checked) {
          form_control.type = "text";
          toggle_button.querySelector("i").classList.add("ri-eye-off-line");
          toggle_button.querySelector("i").classList.remove("ri-eye-line");
        } else {
          form_control.type = "password";
          toggle_button.querySelector("i").classList.add("ri-eye-line");
          toggle_button.querySelector("i").classList.remove("ri-eye-off-line");
        }
      }
    });
  }
});
