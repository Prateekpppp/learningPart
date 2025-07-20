fs.rmdir('newDir', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory deleted");
});
