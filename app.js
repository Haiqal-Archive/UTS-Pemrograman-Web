 $(document).ready(function(){
    // --- FITUR 1: SMOOTH SCROLL ---
    // Memilih semua link <a> yang 'href'-nya dimulai dengan '#'
    $('a[href^="#"]').on('click', function(event) {

        // Pastikan 'this.hash' memiliki nilai sebelum menimpa perilaku default
        if (this.hash !== "") {
            // Mencegah perilaku klik <a> standar (lompat)
            event.preventDefault();

            // Simpan hash (misal: #about, #contact)
            var hash = this.hash;

            // Ambil posisi 'top' dari elemen target
            // 'offset().top' adalah fungsi jQuery untuk mendapatkan koordinat
            var targetOffset = $(hash).offset().top;

            // Animasikan scroll
            $('html, body').animate({
                scrollTop: targetOffset - 70 // Kurangi 70px untuk memberi jarak dari navbar
            }, 0); // 800 milidetik (0.8 detik) untuk durasi animasi
        }
    });


    // --- FITUR 2: TOMBOL SCROLL-TO-TOP ---
    var toTopBtn = $('#to-top-btn');

    // Tampilkan/sembunyikan tombol saat window di-scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // Jika scroll lebih dari 200px
            toTopBtn.fadeIn(); // Tampilkan tombol
        } 
        else {
            toTopBtn.fadeOut(); // Sembunyikan tombol
        }
    });

    // Klik pada tombol akan membawa ke atas
    toTopBtn.click(function() {
        $('html, body').animate({scrollTop: 0}, 0); // Scroll ke atas (posisi 0)
    });
    

    // --- FITUR 3: VALIDASI FORM KONTAK SEDERHANA ---
    $('#contact-form').submit(function(event) {
        // Mencegah form dikirim secara default
        event.preventDefault();
        
        // Ambil nilai dari input menggunakan 'id'-nya
        var nama = $('#input-nama').val();
        var email = $('#input-email').val();
        var pesan = $('#input-pesan').val();
        var formMessage = $('#form-message');

        // Hapus pesan error/sukses sebelumnya
        formMessage.empty().removeClass('alert-danger alert-success');

        // Cek jika ada field yang kosong
        if (nama === '' || email === '' || pesan === '') {
            // Tampilkan pesan error
            formMessage.addClass('alert alert-danger')
                        .text('Harap isi semua field yang wajib diisi.');
        } else {
            // Jika semua terisi (simulasi sukses)
            formMessage.addClass('alert alert-success')
                        .text('Terima kasih! Pesan Anda telah terkirim.');
            
            // Kosongkan form setelah "sukses"
            $('#contact-form')[0].reset(); 
        }
    });

    // --- FITUR 4: EFEK REVEAL SAAT SCROLLING ---
    function checkScrollReveal() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        
        // Jarak dari bagian atas viewport di mana elemen mulai muncul (misal: 100px dari bawah)
        var revealPoint = 100; 

        // Seleksi semua section (selain header)
        $('section').each(function() {
            var element = $(this);
            // Dapatkan posisi elemen relatif terhadap dokumen
            var elementTop = element.offset().top; 
            
            // Cek: Apakah bagian atas elemen berada di bawah posisi scroll saat ini, 
            // DAN apakah elemen masih di atas batas bawah viewport saat ini
            if (elementTop < scrollPos + windowHeight - revealPoint) {
                element.addClass('is-visible');
            }
            // Opsional: untuk efek sekali muncul saja, tidak perlu else {}
            // Jika Anda ingin elemen kembali tersembunyi saat di scroll ke atas, 
            // Anda bisa menambahkan 'else { element.removeClass('is-visible'); }'
        });
    }

    // Panggil saat dokumen pertama kali dimuat (untuk elemen yang sudah di viewport)
    checkScrollReveal();

    // Panggil setiap kali window di-scroll
    $(window).scroll(function() {
        checkScrollReveal();
    });
    
});

function kirim_pesan(){
    var nama = $("#input-nama").val();
    var email = $("#input-email").val();
    var nomor_hp = $("#nomor_hp").val();
    var pesan = $("#pesan").val();
    // var link = `https://api.whatsapp.com/send?phone=6288973292196&text=Hi%2C%20saya%20dapat%20kontak%20dari%20web.%20Ini%20data%20saya%3A%0ANama%3A%20${nama}%0ANomor%3A%20${nomor_hp}%0AEmail%3A%20${email}%0APesan%3A%20${pesan}`;

    window.open(link,"blank");
}