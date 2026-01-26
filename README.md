# Digital Garden

Quartz is a popular static website generator which converts markdown files into aesthetic pages to view as a website. 

This digital garden is a forked version of Quartz which strips down a lot of the bloated features (which I do not and will never intend to use).
It also removes any need to have the repository alongside my notes, and automates the entire sync process to my liking.

### Process
1. Majority of the process for building has been kept the same
2. When it comes to deploying, the workflow runs (approximately) weekly.
3. The workflow checks the dates for the latest commits from my digital garden (this) repo and my notes directory repo.
4. If there is no new commits since the last deployment, then the workflow ends here. Otherwise...
5. Clones my notes into the contents folder, and runs the rest of the deployment as normal

#### Before
- Previously, Quartz requires calling `npx quartz sync` to keep the contents in sync.
- Additionally, if there were any updates to the contents, you would need the entire repo (waste of storage space)

#### After
- I never need to have the digital garden repo kept on my computer unless I want to make changes (which I highly doubt)
- I only need to focus on keeping solely my contents up to date, the rest is handled automatically.
 
And below is the obligatory quote to inspire learning:
> "The beautiful thing about learning is that nobody can take it away from you." ~ B.B. King
