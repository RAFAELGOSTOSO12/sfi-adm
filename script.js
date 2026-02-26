const admins = [
  {
    nome: "Rafael Rodrigues",
    registro: "78",
    cargo: "Administrador",
    nick: "FENIIX_OU_RAFA",
    horas: "N/A",
    advertencias: "1",
    frequencia: "Irregular",
    faixa: "N/A",
    data: "N/A",
    email: "Não informado",
    matricula: "SC119349",
    participacao: "0.00%",
    observacoes: "N/A"
  }
];

function buscarADM() {
  const busca = document.getElementById("searchInput").value.toLowerCase();
  const adm = admins.find(a => a.nome.toLowerCase().includes(busca));

  if (!adm) {
    alert("Administrador não encontrado");
    return;
  }

  document.getElementById("resultado").classList.remove("hidden");

  for (let key in adm) {
    document.getElementById(key).innerText = adm[key];
  }
}
