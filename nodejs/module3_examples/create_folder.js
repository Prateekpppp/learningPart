fs.mkdir('newDir', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory created");
});
