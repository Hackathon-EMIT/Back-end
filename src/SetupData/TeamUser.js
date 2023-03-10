const { Team, User } = require("#Model");

module.exports = async function (team_id,user_id){
    const team = await Team.findOne({ where: { team_id } });
    const user = await User.findOne({ where: { user_id } });
    await team.addUser(user);
    await team.save();
    const users = await team.getUsers();
    console.log((await users[0].toJSON()));
}