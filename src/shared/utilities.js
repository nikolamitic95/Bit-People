const hideEmail = (email) => {
    const array = email.split('@')
    array[0] = array[0].slice(0, 3) + '...' + array[0].slice(-3)
    return array.join('@')
}

const convertDate = (date) => {

    const dateOfBirth = new Date(date);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();

    return (
        `${d}.${m}.${y}.`
    )
}

const search = (data, filters, textInput) => (
    data.filter(item => filters.some(filter => item[filter].toLowerCase().includes(textInput.toLowerCase())))
)


export { hideEmail, convertDate, search }


