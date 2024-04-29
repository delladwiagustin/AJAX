<script>
$(document).ready(function(){
    $.ajax({
        url: 'toko_buku.json',
        dataType: 'json',
        success: function(data) {
            $('#namaToko').text(data.nama_toko);
            $('#pengarang').text(data.pengarang);
            $('#alamat').text(data.alamat);
            
            var table = '<table border="1"><tr><th>Judul</th><th>Tahun Terbit</th><th>Jumlah Halaman</th></tr>';
            $.each(data.koleksi_buku, function(key, value) {
                table += '<tr>';
                table += '<td>' + value.judul + '</td>';
                table += '<td>' + value.tahun_terbit + '</td>';
                table += '<td>' + value.jumlah_halaman + '</td>';
                table += '</tr>';
            });
            table += '</table>';
            $('#koleksiBuku').html(table);
        }
    });
});
</script>
