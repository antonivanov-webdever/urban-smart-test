export default class UsersService {
    static async getUser(login, password) {
        try {
            return await fetch('./db/users.json')
                .then(res => res.json())
                .then(res => res.users.filter(user => user.login === login && user.password === password)[0]);
        } catch (e) {
            console.log(`Произошла ошибка: ${e.message}`)
        }
    }
}