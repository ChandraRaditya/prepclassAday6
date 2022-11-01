function kabisat(year) {
  if (year % 400 === 0) {
    return "Kabisat";
  }
  if (year % 100 === 0) {
    return "BukanKabisat";
  }
  if (year % 4 === 0) {
    return "Kabisat";
  }

  return "Bukan Kabisat";
}

kabisat(2016);
