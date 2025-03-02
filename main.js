const fetchActivities = require("./utils/response");
const username = process.argv[2];

if (!username) {
    throw new Error('Username not available!');
};

const renderActivities = (events) => {
    if (events.length === 0) {
        console.log('Events not available!');
    };

    events.forEach(event => {
        switch (event.type) {
            case 'PushEvent':
                const commitLength = event.payload.commits.length
                console.log(commitLength);
                const activity = `Pushed ${commitLength} commits to ${event.repo.name}`
                break

            default:
                break;
        }
    });
}

fetchActivities(username)
    .then((events) => renderActivities(events))
    .catch(err => console.log(err))