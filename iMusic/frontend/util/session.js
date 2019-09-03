export const postUser = (user) => {
    return $.ajax({
        url:'api/user',
        method: "POST",
        data: { user }
    })
};

export const postSession = (user) => {
    return $.ajax({
        url:'api/session',
        method: "POST",
        data: { user }
    })
};


export const deleteSession = () => {
    return $.ajax({
        url:'api/session',
        method: "DELETE"
    })
};
