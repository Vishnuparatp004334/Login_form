import toast from 'react-hot-toast'
// validate login page username
export async function usernameValidate(values){
    const errors = usernameVarify({}, values)
    return errors;
}


export async function passwordValidate(values){
    const errors =  passwordVarify({}, values)
    return errors;
}

// validate reset password
export async function resetPasswordValidation(values){
    const errors =  passwordVarify({}, values);
    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password not match...!")
    }
    return errors;
}

// validation registration
export async function registerValidation(values){
    const errors =  usernameVarify({}, values);
    passwordVarify(errors, values);
    emailVarify(errors, values);
}

// Validate Profile Page
export async function profileValidation(values){
    const errors =  emailVarify({}, values);
    return errors;
}

// validate password
function passwordVarify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/

    if (!values.password) {
        errors.password = toast.error('Password Required...!');
    }
    else if (values.password.includes(" ")) {
        errors.password = toast.error('Wronge Password...!');
    }
    else if (values.password.length<4) {
        errors.password = toast.error('Password must be more then four character...!');
    }
    else if (!specialChars.test(values.password)) {
        errors.password = toast.error('Password must have special character...!');
    }
    return errors;
}

// Validate username
function usernameVarify(errors = {}, values){
    if (!values.username) {
        errors.username = toast.error('Username Required...!');
    }
    else if (values.username.includes(" ")) {
        errors.username = toast.error('Invalid Username...!')
    }
    return errors;
}
// validation error
function emailVarify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/

    if (!values.email) {
        errors.password = toast.error('Email Required...!');
    }
    else if (values.email.includes(" ")) {
        errors.password = toast.error('Wronge Email...!');
    }
    else if (!specialChars.test(values.email)) {
        errors.password = toast.error('Invalid email address...!');
    }
    return errors;
}