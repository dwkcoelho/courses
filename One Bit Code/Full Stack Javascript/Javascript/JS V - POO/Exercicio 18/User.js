class User {
    constructor(fullname, email, password) {
        this.fullname = fullname,
        this.email = email,
        this.password = password
    }

    login(email, password) {
        if(this.email === email && this.password === password) {
            console.log('You have logged in.')
            return
        }
        console.log('Incorrect data!')
    }
}

const diego = new User('Diego Alegre', 'dwkcoelho@gmail.com', 'silva1234')
diego.login('dwkcoelho@gmail.com', 'silva1234')