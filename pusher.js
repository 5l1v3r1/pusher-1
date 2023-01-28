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

// Call the function every 1-3 hours
let randomNum = Math.floor(Math.random() * 3) + 1;
setInterval(addLineAndCommit, randomNum * 60 * 60 * 1000);
