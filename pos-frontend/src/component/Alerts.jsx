import Swal from "sweetalert2";

const Alerts = (props) => {
    // This component doesn't return anything because it directly triggers the alert
    // based on the props passed to it.
    return null;
}

export const showAlert = (position, icon, title) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1550
    });
};

export default Alerts;
