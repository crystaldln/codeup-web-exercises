"use strict";
const GITHUB_API
(() => {

    const getMostRecentCommit = (username) => {
        fetch(`https://api.github.com/users/crystaldln/events/public`, {headers: {'Authorization': `token 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`}})
            let APPDID = GITHUB_API
            .then(resp => {

                return resp.json();
            }).then(events => {
            console.log(events);
            let eventTypes = events.map(event => event.type);
            let mostRecent = eventTypes.indexOf("PushEvent");
            console.log(events[mostRecent].created_at);

            let pushEvents = events.filter(event => event.type === "PushEvent");
            console.log(pushEvents[0].created_at);

            for (let event of events) {
                if (event.type === "PushEvent") {
                    console.log(event.created_at);
                    break;
                }
            }
        });
    }

    getMostRecentCommit("crystaldln");
})();


function wait(num) {
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
}