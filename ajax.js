<script>
$(document).ready(function(){
    $.ajax({
        url: 'toko_buku.json',
        dataType: 'json',
        success: function(data) {
            $('#namaToko').text(data.nama_toko);
            $('#pengarang').text(data.pengarang);
            $('#alamat').text(data.alamat);
        }
    });
});
</script>
