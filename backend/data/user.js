import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: 'Anirudh',
        email: 'anirudh@example.com',
        password: hashSync('123456',10)
    },
    {
        name: 'Golu',
        email: 'golu@example.com',
        password: hashSync('123456',10)
    }
]
export default users