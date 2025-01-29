# Task 2

1. Create a private github repo named "i-am-a-git-noob"
Created a new private repo named “i-am-a-git-noob” on github
Tapping the new repo button , named it and set its visibility to private and created.
2. Create a new repository on local in an empty directory (NOTE: do not clone) 

```bash
mkdir task2
cd task2
git init

Initialized empty Git repository in /Users/yuvrajsinghsisodiya/syvora/task2/.git/
```

**Ques**: What changes did you observe in the current directory after initializing local repo?
It added a .git folder in the directory , which stores the metadata and object database.
Which tracks all the changes made to the file, basically has the whole project’s history.

1. Point remote of your local git repo to the newly created repo on github
I will add the newly created remote repo’s URL to the current local repo.

```bash
➜  task2 git:(master) git remote add origin https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
➜  task2 git:(master) git remote
origin
➜  task2 git:(master) git remote -v
origin	https://github.com/yuvrxj-syvora/i-am-a-git-noob.git (fetch)
origin	https://github.com/yuvrxj-syvora/i-am-a-git-noob.git (push)
```

4. Print current git configs on terminal

```bash
➜  task2 git:(master) git config list

credential.helper=osxkeychain
user.name=Yuvraj Sisodiya
user.email=ysisodiya@qodeleaf.com
core.editor=code --wait
color.ui=auto
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
remote.origin.url=https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
```

1. Update git config with your name and email address (only for current repository)
    
    ```bash
    ➜  task2 git:(master) git config user.name "Yuvraj Sisodiya Test"
    ➜  task2 git:(master) git config user.email "ysisodiya@qodeleaf.test"
    ➜  task2 git:(master) git config list --local
    
    remote.origin.url=https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
    remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    user.name=Yuvraj Sisodiya Test
    user.email=ysisodiya@qodeleaf.test
    ```
    
2. Create a file named "test1.txt"
    
    ```bash
    ➜  task2 git:(master) touch test1.txt
    ➜  task2 git:(master) ✗ ls
    test1.txt
    ```
    
3. Added line with text "first line in file" in "test1.txt".
    
    ```bash
    ➜  task2 git:(master) ✗ echo "first line in test" >> test1.txt
    ➜  task2 git:(master) ✗ vi test1.txt
    
    first line in test
    ~
    "test1.txt" 1L, 19B
    ```
    

1. Push this file to your github repo.

    
    Added the untracked test.txt file to the index and made the commit on the master branch , push it to the origin alias of remote repo’s url.
    
    ```bash
    ➜  task2 git:(master) ✗ ls
    test1.txt
    ➜  task2 git:(master) ✗ git status
    On branch master
    
    No commits yet
    
    Untracked files:
      (use "git add <file>..." to include in what will be committed)
    	.test1.txt.swp
    	test1.txt
    
    nothing added to commit but untracked files present (use "git add" to track)
    
    ➜  task2 git:(master) ✗ git add test1.txt
    
    ➜  task2 git:(master) ✗ git commit -m "first commit"
    [master (root-commit) 94626d8] first commit
     1 file changed, 1 insertion(+)
     create mode 100644 test1.txt
     
    ➜  task2 git:(master) ✗ git push origin master
    Enumerating objects: 3, done.
    Counting objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 241 bytes | 241.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
     * [new branch]      master -> master
     
    ➜  task2 git:(master) ✗
    ```
    
2. Append line with text "second line in file" in "test1.txt".

```bash
➜  task2 git:(master) ✗ echo "second line in test" >> test1.txt
➜  task2 git:(master) ✗ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   test1.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

1. Add file to the staging area.
Added the file to the staging area. We can add each file individually with its name or with **git add .** , which adds all the files.
    
    ```bash
    ➜  task2 git:(master) ✗ git add .
    ➜  task2 git:(master) ✗ git status
    On branch master
    Changes to be committed:
      (use "git restore --staged <file>..." to unstage)
    	modified:   test1.txt
    
    ```
    
2. Check the status of the file in all staging area
We will check it with git status , mentioned above for the same.

3. Append line with text "Third line in file" in "test1.txt". (Note status of files across different areas).
    
    After adding the third line in test1.txt file, the status is :
    
    ```bash
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
    	modified:   test1.txt
    ```
    
4. Remove "test1.txt" from the staging area.
    
    ```bash
    ➜  task2 git:(master) ✗ git reset test1.txt
    Unstaged changes after reset:
    M	test1.txt
    ```
    
5. Create commit with message "My First Commit"

    
    ```bash
    ➜  task2 git:(master) ✗ git commit -m "My First Commit"
    ```
    

1. Push commit to the remote repo **NOTE**: checklist commits pushed to the remote

    
    ```bash
    ➜  task2 git:(master) ✗ git push origin master
    ```
    
2. Update message of last commit "My First Commit" to "My Second Commit" (without creating a new commit)

I started it with git commit —amend.
which opened a file where I can edit the last commit’s message, where I made the changes in the commit message and saved it.

    
    ```bash
    ➜  task2 git:(master) ✗ git add .
    
    ➜  task2 git:(master) ✗ git commit -m "My first commit"
    [master 2346b8b] My first commit
     1 file changed, 2 insertions(+)
     
    ➜  task2 git:(master) git push origin master
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (2/2), done.
    Writing objects: 100% (3/3), 296 bytes | 296.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
       94626d8..2346b8b  master -> master
       
    ➜  task2 git:(master) git commit --amend
    [master 7a0f909] My second commit
     Date: Wed Jan 29 11:57:18 2025 +0530
     1 file changed, 2 insertions(+)
    ```
    
    Here When I pushed the changes, It threw an error.
    
    ```bash
    ➜ task2 git:(master) git push origin master
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
     ! [rejected]        master -> master (non-fast-forward)
    error: failed to push some refs to 'https://github.com/yuvrxj-syvora/i-am-a-git-noob.git'
    ```
    
    I was asked to do a pull from master (hint). I did the same and it says that I have divergent branches and we need to reconcile them , There are three options.
    
    ```bash
    
    hint:   git config pull.rebase false  # merge
    hint:   git config pull.rebase true   # rebase
    hint:   git config pull.ff only       # fast-forward only
    ```
    
    I used the rebase true , where we rebase the head back to the earlier stage.
    I tried to commit again and with the same “My first commit” message and then edit the last message by pushing it.
    
    As I used the git commit —amend , we need to push the current changes with a -f or we can use a safer practice —force-with-lease which keeps us notified and doesn’t push if there was any change in repo ahead of it.
    
    ```bash
    ➜  task2 git:(master) git commit --amend
    [master 46fafdb] My second commit 2
     Date: Wed Jan 29 11:57:18 2025 +0530
     1 file changed, 2 insertions(+)
    ```
    
3. Push commit with the updated message to the remote repo
    
    ```bash
    ➜  task2 git:(master) git push origin master
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
     ! [rejected]        master -> master (non-fast-forward)
    error: failed to push some refs to 'https://github.com/yuvrxj-syvora/i-am-a-git-noob.git'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. If you want to integrate the remote changes,
    hint: use 'git pull' before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.
    ➜  task2 git:(master) git push origin master --force-with-lease
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (2/2), done.
    Writing objects: 100% (3/3), 303 bytes | 303.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
     + 24109ab...46fafdb master -> master (forced update)
    ```
    

1. Revert the last commit and check the updated commit logs history.
Git revert will create a new commit in place of existing commit , which removes all the changes to the last to last commit. And a new commit will be pushed to the remote repo.

    
    ```bash
    
    ➜  task2 git:(master) git revert HEAD
    [master 35fdef6] Revert "My second commit"
     1 file changed, 2 deletions(-)
    
    ➜  task2 git:(master) git push origin master
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (1/1), done.
    Writing objects: 100% (3/3), 298 bytes | 298.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
       46fafdb..35fdef6  master -> master
       
    ➜  task2 git:(master) git log --oneline
    
    35fdef6 (HEAD -> master, origin/master, origin/HEAD) Revert "My second commit"
    46fafdb My second commit 2
    94626d8 first commit
    ```
    
2. Append line with text "Fourth line in file" in "test1.txt" and commit it.
    
    ```bash
    ➜  task2 git:(master) echo " Fourth line in file " >> test1.txt
    ➜  task2 git:(master) ✗ git add test1.txt
    ➜  task2 git:(master) ✗ git commit -m "Fourth Commit"
    [master 4a181b7] Fourth Commit
     1 file changed, 1 insertion(+)
    ```
    
3. Update the last commit such that the "test1.txt" also contains "Fifth line in file" (without creating a new commit)
    
    ```bash
    ➜  task2 git:(master) ✗ git commit -m "Fourth Commit"
    [master 4a181b7] Fourth Commit
     1 file changed, 1 insertion(+)
    ➜  task2 git:(master) echo " Fifth line in file " >> test1.txt
    ➜  task2 git:(master) ✗ git commit --amend
    [master 7cd45a3] Fourth Commit with fifth line
     Date: Wed Jan 29 13:07:06 2025 +0530
     1 file changed, 1 insertion(+)
    ```
    
4. Push the updated commits to the remote repository
    
    ```bash
    
    ➜  task2 git:(master) ✗ git log
    ➜  task2 git:(master) ✗ git push origin master --force-with-lease
    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Writing objects: 100% (3/3), 306 bytes | 306.00 KiB/s, done.
    Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
       35fdef6..7cd45a3  master -> master
    ```
    
5. Append some content in "test1.txt" file

    
    ```bash
    
    ➜  task2 git:(master) ✗ echo "content /n content" >> test1.txt
    ➜  task2 git:(master) ✗ vi test1.txt
    ➜  task2 git:(master) ✗ git pull origin master
    error: cannot pull with rebase: You have unstaged changes.
    error: Please commit or stash them.
    ```
    

1. Pull all the content from remote repository to local repository
Either we need to remove the current changes or we can stash them.

    
    ```bash
    ➜  task2 git:(master) ✗ git status
    On branch master
    Changes to be committed:
      (use "git restore --staged <file>..." to unstage)
    	modified:   test1.txt
    
    ➜  task2 git:(master) ✗ git stash
    Saved working directory and index state WIP on master: 7cd45a3 Fourth Commit with fifth line
    ➜  task2 git:(master) git pull origin master
    From https://github.com/yuvrxj-syvora/i-am-a-git-noob
     * branch            master     -> FETCH_HEAD
    Already up to date.
    ```
    
2. Clone the remote repository to some other directory in your local system.
    
    > Applied the stash which we did earlier and added those file to staging.
    Pushed the commit and pulling the same in the cloned repo.
    > 

```bash
➜  task2 git:(master) ls
test1.txt
➜  task2 git:(master) git stash apply
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   test1.txt

no changes added to commit (use "git add" and/or "git commit -a")
➜  task2 git:(master) ✗ git commit -m
error: switch `m' requires a value
➜  task2 git:(master) ✗ git commit -m "fifth commit"
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   test1.txt

no changes added to commit (use "git add" and/or "git commit -a")
➜  task2 git:(master) ✗ git add .
➜  task2 git:(master) ✗ git commit -m "fifth commit"
[master 4e01e8d] fifth commit
 1 file changed, 2 insertions(+)
➜  task2 git:(master) git push origin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 303 bytes | 303.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
   7cd45a3..4e01e8d  master -> master
➜  task2 git:(master)
```

Here cloning the remote repo locally and  pulling the latest from the remote repo.

```bash
➜  syvora mkdir task2clone
➜  syvora task2clone
➜  task2clone git clone -q https://github.com/yuvrxj-syvora/i-am-a-git-noob.git
➜  task2clone git log
fatal: not a git repository (or any of the parent directories): .git
➜  task2clone ls
i-am-a-git-noob
➜  task2clone i-am-a-git-noob
➜  i-am-a-git-noob git:(master) ls
test1.txt
➜  i-am-a-git-noob git:(master) l
total 8
drwxr-xr-x@  4 yuvrajsinghsisodiya  staff   128B 29 Jan 13:17 .
drwxr-xr-x@  3 yuvrajsinghsisodiya  staff    96B 29 Jan 13:16 ..
drwxr-xr-x@ 12 yuvrajsinghsisodiya  staff   384B 29 Jan 13:17 .git
-rw-r--r--@  1 yuvrajsinghsisodiya  staff    41B 29 Jan 13:17 test1.txt
➜  i-am-a-git-noob git:(master) git pull origin master
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 283 bytes | 70.00 KiB/s, done.
From https://github.com/yuvrxj-syvora/i-am-a-git-noob
 * branch            master     -> FETCH_HEAD
   7cd45a3..4e01e8d  master     -> origin/master
Updating 7cd45a3..4e01e8d
Fast-forward
 test1.txt | 2 ++
 1 file changed, 2 insertions(+)
```