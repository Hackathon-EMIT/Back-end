const setupData = require("#Utils/setupData");
const relationTeamProject = require("./TeamProject");
const relationTaskProject = require("./TaskProject");
const relationTeamUser = require("./TeamUser");
const {
    User,
    Team,
    Project,
    sequelize,
    Task
} = require("#Model");



(async () => {

    await sequelize.sync({
        // alter:true,
        force:true
    })
    // await setupData({ uri:__dirname+"/Task.json", model: Task });
    await setupData({ uri:__dirname+"/Team.json", model: Team });
    await setupData({ uri:__dirname+"/User.json", model: User });
    await setupData({ uri:__dirname+"/Project.json", model: Project });
    await setupData({ uri:__dirname+"/Task.json", model: Task });

    await relationTeamProject(
        "53e9a54c-df5a-470a-bf8f-0d357487a984",
        "53ac94bd-0f3b-448f-9f7a-01904da85054"
    );

    await relationTaskProject(
        "53e9a54c-df5a-470a-bf8f-0d357457a984",
        "53ac94bd-0f3b-448f-9f7a-01904da85054"
    );

    await relationTeamUser(
        "53e9a54c-df5a-470a-bf8f-0d352487a984",
        "53e9a54c-df5a-470a-bf8f-0d357c57aa84"
    )
})();
