const { Task, Project } = require("#Model");

module.exports = async function (task_id,project_id){
    const task = await Task.findOne({ where: { task_id } });
    const project = await Project.findOne({ where: { project_id } });
    await project.addTask(task);
}