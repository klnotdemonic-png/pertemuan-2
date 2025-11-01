
const nama1Input = document.getElementById('nama1');
const harga1Input = document.getElementById('harga1');
const nama2Input = document.getElementById('nama2');
const harga2Input = document.getElementById('harga2');
const calcBtn = document.getElementById('calcBtn');
const output = document.getElementById('output');


function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID').format(number);
}


function hitungTotal() {
  const namaProduk1 = nama1Input.value || 'Produk A';
  const namaProduk2 = nama2Input.value || 'Produk B';

  const hargaProduk1 = Number(harga1Input.value) || 0;
  const hargaProduk2 = Number(harga2Input.value) || 0;

  const totalHarga = hargaProduk1 + hargaProduk2;

  const message = `Total harga untuk produk ${namaProduk1} dan ${namaProduk2} adalah Rp${formatRupiah(totalHarga)}`;

  output.textContent = message;
  console.log(message);
}

calcBtn.addEventListener('click', hitungTotal);


hitungTotal();
