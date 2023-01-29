# Pusher

Pusher is a simple JavaScript script that allows you to add a new line to a file and commit/push it to GitHub at random intervals.

## Getting Started

To use Pusher, you will need to have Node.js and Git installed on your machine. You will also need to have a GitHub repository set up and be able to push to it.

## Installation

1. Clone or download the Pusher repository to your local machine.

2. Install the required dependencies by running the following command in the project directory: 

```
npm install
```

3. Replace the name of the file you want to add a new line to in the `fs.writeFileSync` function with the name of your file.

4. Replace the repository name in the `git push` command with the name of your repository.

## Usage

To start Pusher, simply run the following command in the project directory:

```
node pusher.js
```

Pusher will add a new line to the specified file and commit/push it to GitHub at random intervals. The interval is determined by a random number of minutes between 0 and 10.

## Customization

You can customize the interval by changing the `minutes` variable in the `setInterval` function. You can also change the commit message by editing the `git commit` command.

## Conclusion

Pusher is a simple tool that can be used to automate the process of committing and pushing changes to a GitHub repository. It is a great tool for keeping your repository up-to-date with the latest changes.
