function addRemove(command) {
    let num = 1;
    let nums = [];


    command.forEach(element => {
        if (element === "add") {
            nums.push(num);
        } else if (element === "remove") {
            nums.pop();
        }

        num++;
    });

    if (nums.length === 0) {
        console.log("Empty");
    } else {
        console.log(nums.join('\n'));
    }

}

// addRemove(['add', 'add', 'add', 'add']);
// addRemove(['add', 'add', 'remove', 'add', 'add']);
addRemove(['remove', 'remove', 'remove']);