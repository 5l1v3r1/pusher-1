const fs = require('fs');
const { execSync } = require('child_process');
let i = 0;

// Function to add a new line to the file and commit/push to GitHub
function addLineAndCommit() {
    i++;
    // Rewrite the file "test.txt" with the text "Hello, World!"
    fs.writeFileSync("test.txt", `Hello, World! ${i} \n`);

    // Commit and push the file to GitHub
    execSync("git add .");
    execSync(`git commit -m 'Rewrote test.txt ${i}'`);
    execSync("git push origin main");
}

// Call the function every 2 hours
setInterval(addLineAndCommit, 3000);

setInterval(addLineAndCommit, 2 * 60 * 60 * 1000);
