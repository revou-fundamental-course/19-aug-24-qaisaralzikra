function replaceName() {
    let nama = prompt("Masukkan Nama Lengkap Anda", "");
    document.getElementById("nama").innerHTML = nama;
}
replaceName();

    function generateOutput() {
            // Mengambil nilai dari form
            const nama = document.getElementById('name').value;
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
            const pesan = document.getElementById('pesan').value;

            // Menampilkan nilai di section output
            document.getElementById('outputSection').innerHTML = `
                <p>Nama : ${nama} <br></p>
                <p>Tanggal Lahir: ${tanggalLahir} <br></p>
                <p>Jenis Kelamin: ${jenisKelamin} <br></p>
                <p>Pesan : ${pesan} <br></p>
            `;
            
    }

var slideIndex = 1;
showDivs(slideIndex)

function plusDivs (n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-main");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
},3000)
