
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

export const showLoading = (title = "Signing In...", text = "Please wait") => {
    return (
        Swal.fire({
            title,
            text,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        })
    )
};

export const closeSwal = () => {
    return Swal.close();
};

export const showSuccess = (text = "", title = "Signed In Successfully!", timer = 2000) => {
    return (
        Swal.fire({
            position: "center",
            icon: "success",
            title,
            text,
            showConfirmButton: false,
            timer,
        })
    )
};

export const showError = (text = "Something went wrong", title = "Error",) => {
    return (
        Swal.fire({
            icon: "error",
            title,
            text,
        })
    )
};
