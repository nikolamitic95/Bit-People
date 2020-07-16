import { UserObject } from "../entities/UserObject";

const fetchUsers = () => {
    return (
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(response => response.results)
            .then(usersList => {
                let newUsersList = usersList.map(user => new UserObject(user))
                return newUsersList;
            })
            .catch(error => console.log(error))
    )
}

export { fetchUsers };