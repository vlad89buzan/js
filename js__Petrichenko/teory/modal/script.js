window.addEventListener('DOMContentLoaded',()=>{
    const modalTrigger = document.querySelectorAll("[data-modal]");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector("[data-close]");
    
    function openModal() {
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflowY = "hidden";
      clearInterval(modalTimerId);
    }
    function closeModal() {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflowY = "";
    }
    modalTrigger.forEach((trigger) => {
      trigger.addEventListener("click", () => {
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
    });
    // open modal after sometime //5s
    const modalTimerId = setTimeout(openModal, 5000);
    
    //open modal when scroll to the end of page
    function showModalByScroll(){
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
      }
    }
    
    window.addEventListener("scroll", showModalByScroll);
});
