function LogInButton() {
    let timerInterval
    Swal.fire({
        title: 'Loading...',
        html: 'Loding saved notes...  <b></b>',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            LogIn();
        }
    })
}

function SignUpButton() {
    let timerInterval
    Swal.fire({
        title: 'Loading...',
        html: 'Creating new account... <b></b>',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            SignUp();
        }
    })
}

function LogIn() {
    window.location.replace("./main.html");
}

function SignUp() {
    window.locationreplace("./main.html");
    Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'New account created!',
        showConfirmButton: false,
        timer: 1500
    })
}
