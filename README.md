# github-secret-leak-attempt

Testing if a user without write access could leak secrets [through a pull-request](https://github.com/sarpik/github-secret-leak/pull/1) (before it is merged).

Did not work - an action was not triggered inside the PR until it was merged, because of  https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#about-workflow-events

> An action in a workflow run can't trigger a new workflow run. For example, if an action pushes code using the repository's GITHUB_TOKEN, a new workflow will not run even when the repository contains a workflow configured to run when push events occur.

good.

Though mind that once merged, this will obviously take effect (as it should). Thus take good care of your workflows & secrets:)
