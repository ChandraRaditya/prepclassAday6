function rating(age) {
  if (age >= 21) {
    return "DEWASA";
  }
  if (age >= 13) {
    return "REMAJA";
  }
  if (age >= 9) {
    return "BIMBINGAN ORANG TUA";
  }

  return "SEMUA USIA";
}

rating(32);
