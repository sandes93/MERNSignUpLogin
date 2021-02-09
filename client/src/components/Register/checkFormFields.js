export const checkFormFields = ({ email, first_name, last_name, password }) => {
    let errors = {};
    let formIsValid = true;
    // email
    const emailRegex = /^\w+([.-]?\w+)*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,4})+$/;
    const emailResult = emailRegex.test(email);

    if (!email) {
        formIsValid = false;
        errors['email'] = 'Cannot be empty';
    } else if (!emailResult) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
    }

    // password
    if (!password) {
        formIsValid = false;
        errors['password'] = 'Cannot be empty';
    } else if (password.length < 6) {
        formIsValid = false;
        errors['password'] = 'Password must be at least 6 characters';
    }

    // firstName
    if (!first_name) {
        formIsValid = false;
        errors['first_name'] = 'Cannot be empty';
    } else if (typeof first_name !== 'undefined') {
        if (!first_name.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors['first_name'] = 'Only letters';
        }
    }

    // lastName
    if (!last_name) {
        formIsValid = false;
        errors['last_name'] = 'Cannot be empty';
    } else if (!last_name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['last_name'] = 'Only letters';
    }

    return [errors, formIsValid];
};
