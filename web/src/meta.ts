const PREFIX = "/api/v1";

const addPrefix = (url: string) => `${PREFIX}${url}`;

export default {
    LIVE: {
        list: {
            url: addPrefix("/lives"),
            method: "GET",
        },
    },
};
