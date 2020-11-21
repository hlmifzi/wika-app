import swal from 'sweetalert2';

const Swal = {
    success: () => (
        swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Anda Berhasil Login!',
            showConfirmButton: false,
            timer: 1800
        })
    ),
    successSubmit: message => (
        swal.fire({
            type: 'success',
            title: 'Success!',
            text: message,
            showConfirmButton: false,
            timer: 2500
        })
    ),
    failed: message => (
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: message,
        })
    )
}

export default Swal
