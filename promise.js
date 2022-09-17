const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const movieList1 = await promiseTheaterIXX();
    const movieList2 = await promiseTheaterVGC();

    const total1 = movieList1.filter((movie) => movie.hasil === emosi).length;
    const total2 = movieList2.filter((movie) => movie.hasil === emosi).length;

    return total1 + total2;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
