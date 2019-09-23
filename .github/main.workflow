workflow "Build and publish to npm" {
    on = "push"
    resolves = ["npm publish"]
}

action "npm run test" {
    uses = "actions/npm@master"
    args = ["test"]
    needs = ["npm install"]
}

action "npm install" {
    uses = "actions/npm@master"
    args = ["install"]
}

action "npm run build" {
    needs = ["npm run test"]
    uses = "actions/npm@master"
    args = ["run build"]
}

action "npm publish" {
    needs = ["npm run build"]
    uses = "actions/npm@master"
    args = ["publish"]
    secrets = ["NPM_AUTH_TOKEN"]
}