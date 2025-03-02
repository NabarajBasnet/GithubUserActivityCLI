const fetchActivities = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`, {
            headers: {
                "User-Agent": "node.js",
            },
        });
        const jsonResult = await response.json();
        return jsonResult;
    } catch (error) {
        console.log("Error: ", error);
    };
};

module.exports = fetchActivities;
