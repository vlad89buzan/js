// import modal from './modules/modals';

// window.addEventListener('DOMContentLoaded',()=>{
//    modal(
//         ".popup_engineer_btn",
//         ".popup_engineer",
//         ".popup_engineer .popup_close",
//         3000
//       );
// });


function modal(
  triggerSelector,
  modalSelector,
  closeSelector,
  time = 0,
  end = 0
) {
  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const modalCloseBtn = document.querySelector(closeSelector);
  let modalTimerId;

  function openModal() {
    // modal.classList.add("show");
    // modal.classList.remove("hide");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    // modal.classList.add("hide");
    // modal.classList.remove("show");
    modal.style.display = "none";
    document.body.style.overflowY = "";
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      openModal();
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  // close modal when press Escape
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
  // open modal after sometime //
  if (time > 0) {
    modalTimerId = setTimeout(openModal, time);
  }
  //open modal when scroll to the end of page
  if (end === 1) {
    window.addEventListener("scroll", showModalByScroll);
  }
  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
}

export default modal;
