# template-frontend-ejs-javascript
This is a work in progress and may include unnecessary bloat. Delete bloat where found.

This repo is designed to make the setup of a frontend quicker. The repo uses [EJS](https://ejs.co/) for templates, 
[Express](https://expressjs.com/), JavaScript, [SCSS](https://sass-lang.com/), and [Axios](https://axios-http.com/docs/intro).

This repo can either be used with an ExpressJS backend or as a pure frontend that contacts a microservice backend via REST APIs.

# Setting up your new repo's main branch (two methods)
The simplest method involves deleting the `.git` file in the repo's dir and re-initialising and force pushing a fresh main branch with no commit history.

repo-A is the template repo (aka this repo)

repo-B is your new repo (target repo)

I want to clone repo-A's main branch but without the commit history.

_N.B. This will only work if you are allowed to push directly to main. If not, you will need to push to a new branch, raise a PR and then merge into main._

## Deleting `.git` File (Simplest Method)

### Clone the target repo (repo-B)
```bash
git clone git@github.com:<username>/repo-B
```

Then cd into that new clone repo dir.

### Pull the template repo's branch (repo-A)
While in the target repo's dir, run the following:
```bash
git pull git@github.com:<username>/repo-A <branch_name>
```

This will pull in repo-A's branch into repo-B along with repo-A's commit history.

### Delete Git and Initialise Repo
Run the following command to delete the `.git` file:
```bash
rm -rf .git
```
Once that is deleted, run:
```bash
git init;
git remote add origin git@github.com:<username>/<repo-name>
```

### Commit your code
You will need to re-commit your code to your current branch:
```bash
git add -A;
git commit -am "Initial commit"
```

### Push new branch to repo
You may notice your new branch name is `master`. If you wish to change this to something like `main`, then first you will need to run: 
```bash
git branch -m main
```
After that, you can now force push this branch to the remote repo:
```bash
git push -f origin main
```

# Setting Up SCSS File Watcher in WebStorm
1. To use SCSS, you'll need to install the File Watchers plugin in WebStorm. Go to File > Settings > Plugins and install
`File Watchers` and ensure it is enabled. Also, install the `scss` plugin too.
2. Now run ```npm install -g sass``` to install sass globally.
3. Restart WebStorm.
4. Go to File > Settings > Tools > File Watchers.
5. Click the `+` icon to add a new file watcher and add `SCSS`.
6. Name is "SCSS" and do the following:
   1. Set "File Type" to "SCSS style sheet".
   2. Tick "Track only root files".
   3. Set "Scope" to "Project Files".
   4. Set "Program" to "sass" (if the word "sass" is red you need to restart WebStorm. If this doesn't work, File Watchers cannot find the globally installed sass - will need to troubleshoot).
   5. Set "Arguments" to `$FileName$:$ProjectFileDir$/public/dist/$FileNameWithoutExtension$.css`.
   6. Set "Output paths to refresh" to `$ProjectFileDir$/public/dist/$FileNameWithoutExtension$.css:$ProjectFileDir$/public/dist/$FileNameWithoutExtension$.css.map`.
   7. Set "Working directory" to `$FileDir$`.
   8. Open "Advanced Options" and tick "Auto-save edited files to trigger the watcher" and "Trigger the watcher on external changes".
   9. Set "Show console" to "On error".
   10. Leave "Output filters" blank.
   11. Click "OK" and make sure your new "SCSS" file watcher is enabled by ticking the box under "Enabled".
7. Hit "Apply" and "OK".
8. Restart WebStorm.

For more details and troubleshooting see:
https://www.jetbrains.com/help/webstorm/transpiling-sass-less-and-scss-to-css.html.

Custom output locations: https://www.jetbrains.com/help/webstorm/transpiling-sass-less-and-scss-to-css.html#ws_sass_less_scss_example_scss_custom_output_location.
