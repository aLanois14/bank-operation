async function transfer(from, to, amount) {
  if (champsValides(from, to, amount)) throw new Error("Champ manquant");
  if (amount <= 0) throw new Error("Le montant du transfert doit être positif");

  const response = await fetch("https://api.bank.com/transfer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, amount }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors du transfert");
  }
  return true;
}

function champsValides(from, to, amount) {
  return !from || !to || !amount;
}

module.exports = transfer;
