export const currencyFormat = (num: number) => {
  if (num !== undefined && num !== null) {
    var rupiah = '';
    var numrev = num.toString().split('').reverse().join('');
    for (var i = 0; i < numrev.length; i++) {
      if (i % 3 == 0) {
        rupiah += numrev.substr(i, 3) + '.';
      }
    }
    return rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('');
  } else {
    return 0;
  }
};
