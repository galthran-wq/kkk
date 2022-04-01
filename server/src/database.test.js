const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create dialogue', async () => {
    expect.assertions(1);
    const dialogue = await db.Dialogue.create({
        id: 1,
        name: 'name',
        content: 'content'
    });
    expect(dialogue.id).toEqual(1);
});

test('get dialogue', async () => {
    expect.assertions(2);
    const dialogue = await db.Dialogue.findByPk(1);
    expect(dialogue.name).toEqual('name');
    expect(dialogue.content).toEqual('content');
});

test('delete dialogue', async () => {
    expect.assertions(1);
    await db.Dialogue.destroy({
        where: {
            id: 1
        }
    });
    const dialogue = await db.Dialogue.findByPk(1);
    expect(dialogue).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});