export const generateUsersDetails = (numberofusers) => {
    let users = []
    for (let i = 0; i<numberofusers; i++){
        let firstName = (Math.random() + 1).toString(36).substring(7)
        let lastName = (Math.random() + 1).toString(36).substring(7)
        let email = firstName.toLowerCase() + lastName.toLowerCase()+'@gmail.com'
        users.push({firstName,lastName,email})
    }
    return users
}