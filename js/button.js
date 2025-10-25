const btn = document.getElementById("btnTopo");

// mostra/esconde o botão conforme o scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// ação de voltar pro topo com rolagem suave
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};