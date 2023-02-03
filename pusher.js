const fs = require('fs');
const { execSync } = require('child_process');
let i = 0;

// Function to add a new line to the file and commit/push to GitHub
function addLineAndCommit() {
    i = Math.floor(Math.random() * 99999)
    // Rewrite the file "test.txt" with the text "Hello, World!"
    fs.writeFileSync("test.txt", `Hello, World! ${i} \n`);

    // Commit and push the file to GitHub
    execSync("git add .");
    execSync(`git commit -m 'Rewrot${i}'`);
    execSync("git push ");
}

// Call the function every 1-10 minutes
const minutes = Math.floor(Math.random() * 11)
setInterval(addLineAndCommit, 5 * 1000);
//setInterval(addLineAndCommit, 5000)