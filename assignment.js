const _ = require('lodash');

// soal 1
const nilaiSemester = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

function hitungNilaiSemester(nilai = []) {
  const hasil = {
    totalNilaiSemesterGenap: 0,
    totalNilaiSemesterGanjil: 0,
    rataRataNilaiSemesterGenap: 0,
    rataRataNilaiSemesterGanjil: 0,
  };

  if (nilai.length === 0) {
    return hasil;
  }

  let jumlahGenap = 0;
  let jumlahGanjil = 0;

  for (let i = 0; i < nilai.length; i++) {
    if (index % 2 === 0) {
      jumlahGanjil += nilai[i];
    } else {
      jumlahGenap += nilai[i];
    }
  }

  const jumlahSemesterGanjil = Math.ceil(nilai.length / 2);
  const jumlahSemesterGenap = Math.floor(nilai.length / 2);

  hasil.totalNilaiSemesterGanjil = jumlahGanjil;
  hasil.totalNilaiSemesterGenap = jumlahGenap;
  hasil.rataRataNilaiSemesterGanjil = jumlahGanjil / jumlahSemesterGanjil;
  hasil.rataRataNilaiSemesterGenap = jumlahSemesterGenap === 0 ? 0 : jumlahGenap / jumlahSemesterGenap;

  return hasil;
}

// soal 2
const pisahBilanganGenapGanjil = function (...restParameter) {
  const arrayBilanganGenap = restParameter.filter((angka) => angka % 2 === 0);
  const arrayBilanganGanjil = restParameter.filter((angka) => angka % 2 !== 0);

  return { arrayBilanganGenap, arrayBilanganGanjil };
};

// soal 3
const arrayObjectSiswa = [
  { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] },
  { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] },
  { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
  { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] },
  { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] },
  { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] },
  { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] },
];

const olahDataSiswa = (dataSiswa = [], batasRataRata = 85) => {
  return dataSiswa
    .map((siswa) => {
      const totalNilai = siswa.nilaiNilai.reduce((total, nilai) => total + nilai, 0);
      const rataRataNilai = siswa.nilaiNilai.length ? totalNilai / siswa.nilaiNilai.length : 0;

      return {
        ...siswa,
        nama: siswa.nama.toUpperCase(),
        rataRataNilai,
      };
    })
    .filter((siswa) => siswa.rataRataNilai > batasRataRata)
    .sort((a, b) => b.id - a.id);
};

// soal 4
const people = [
  { name: "Joko", age: 30, nationality: "Indonesia" },
  { name: "Ridwan Hanif", age: 40, nationality: "Malaysia" },
  { name: "Angelina Christie", age: 30, nationality: "Indonesia" },
  { name: "Songpatakot", age: 40, nationality: "Thailand" },
  { name: "Ryu Osaki", age: 50, nationality: "Japan" },
  { name: "Frank Ocean", age: 30, nationality: "Canada" },
  { name: "Grace Liu", age: 50, nationality: "Singapore" },
  { name: "Hadi Kurniawan", age: 40, nationality: "Indonesia" },
  { name: "Ivan", age: 30, nationality: "Indonesia" },
  { name: "Abdullah Judy", age: 60, nationality: "Malaysia" },
];

const kelompokkanPekerjaMuda = (daftarPekerja = [], batasUsia = 35) => {
  const pekerjaMuda = _.filter(daftarPekerja, (pekerja) => pekerja.age < batasUsia);
  return _.groupBy(pekerjaMuda, "nationality");
};

console.log("soal 1");
console.log(hitungNilaiSemester(nilaiSemester));

console.log();
console.log("soal 2");
console.log(pisahBilanganGenapGanjil(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));

console.log();
console.log("soal 3");
console.log(olahDataSiswa(arrayObjectSiswa));

console.log();
console.log("soal 4");
console.log(kelompokkanPekerjaMuda(people));
