
const db = require('./database');

beforeAll(async ()=> {
    await db.sequelize.sync({ force: true})
})

test('create user', async () => {
    expect.assertions(1);
    const user = await db.User.create({
        id: 1,
        name: 'tri',
        email: 'tri@gmail.com'
    });
    expect(user.id).toEqual(1);
})

test('get user', async ()=> {
    expect.assertions(2);
    const user = await db.User.findByPk(1);
    expect(user.name).toEqual('tri');
    expect(user.email).toEqual('tri@gmail.com')
})

test('delete user', async() => {
    expect.assertions(1);
    await db.User.destroy({
        where: {
            id: 1
        }
    })
    const user = await db.User.findByPk(1);
    expect(user).toBeNull();
})

afterAll(async ()=> {
    await db.sequelize.close();
})