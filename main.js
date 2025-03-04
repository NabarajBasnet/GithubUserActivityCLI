const fetchActivities = require("./utils/response");
const username = process.argv[2];

if (!username) {
    throw new Error('Github username not available!');
};

const renderActivities = (events) => {
    if (events.length === 0) {
        console.log('Events not available!');
    };

    events.forEach(event => {
        let activity = null;
        switch (event.type) {
            case 'PushEvent':
                const commitLength = event.payload.commits.length;
                activity = `Pushed ${commitLength} commits to ${event.repo.name}`;
                break;

            case 'CreateEvent':
                activity = `New repo created ${event.repo.name} in branch ${event.payload.master_branch}`;
                break;

            case 'WatchEvent':
                activity = `Starred ${event.repo.name}`;
                break;

            default:
                break;
        }
        console.log('Activity: ', activity);
    });
}

fetchActivities(username)
    .then((events) => renderActivities(events))
    .catch(err => console.log(err))
