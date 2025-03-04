function transfer(from, to, amount) {
  if (!from || !to) throw new Error("Champ manquant");
  if (amount <= 0) throw new Error("Le montant du transfert doit être positif");
  return true;
}

module.exports = transfer;
