workflow "Build and publish to npm" {
    on = "push"
    resolves = ["npm publish"]
}

action "npm run build" {
    uses "actions/npm@master"
    args = "run build"
}

action "npm publish" {
    needs = ["npm run build"]
    uses = "actions/npm@master"
    args = "publish"
    secrets = ["NPM_AUTH_TOKEN"]
}