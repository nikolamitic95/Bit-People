class UserObject {
    constructor(userApi) {
        this.firstName = userApi.name.first
        this.lastName = userApi.name.last
        this.email = userApi.email
        this.gender = userApi.gender
        this.thumbImg = userApi.picture.thumbnail
        this.largeImg = userApi.picture.large
        this.dob = userApi.dob.date
    }
}

export { UserObject }