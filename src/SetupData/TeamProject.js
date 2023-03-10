const { Team, Project } = require("#Model");

module.exports = async function (team_id,project_id){
    const team = await Team.findOne({ where: { team_id } });
    const project = await Project.findOne({ where: { project_id } });
    await team.addProject(project);
}