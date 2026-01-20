# Git Worktrees - Simple Guide

## What is Git Worktree?

Git Worktrees allow you to have **multiple branches checked out at the same time** in different folders.

### Traditional Branches vs Worktrees

**Traditional Branches (Time Separation):**

```bash
git checkout feature1   # All files change to feature1
# ... work ...
git checkout main       # All files change back to main
# ❌ Switch back and forth
# ❌ Can only see one branch at a time
```

**Worktrees (Space Separation):**

```bash
algorithms/          (main branch)    ← Folder 1
algorithms-feature1/ (feature1 branch) ← Folder 2

# ✅ Both exist at the same time
# ✅ Open in separate VS Code windows
# ✅ No switching needed
```

## Visual Comparison

```
┌─────────────────────────────────────┐
│ Traditional Git Branches            │
├─────────────────────────────────────┤
│ algorithms/ (main)                  │
│   ↓ checkout feature1               │
│ algorithms/ (feature1)  ← same dir  │
│   ↓ checkout main                   │
│ algorithms/ (main)      ← same dir  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Git Worktrees                       │
├─────────────────────────────────────┤
│ algorithms/          (main)     ✓   │
│ algorithms-feature1/ (feature1) ✓   │
│ algorithms-hotfix/   (hotfix)   ✓   │
│                                     │
│ All exist simultaneously!           │
└─────────────────────────────────────┘
```

## Essential Commands

### Create Worktree

```bash
# Create NEW branch with worktree
git worktree add ../algorithms-feature1 -b feature1
#                └────────┬────────┘     └───┬────┘
#                      path            branch name

# Checkout EXISTING branch
git worktree add ../algorithms-main main
#                                   └─┬─┘
#                              existing branch
```

### View Worktrees

```bash
git worktree list
# Output:
# /Users/you/algorithms          abc123 [main]
# /Users/you/algorithms-feature1 def456 [feature1]
```

### Remove Worktree

```bash
git worktree remove ../algorithms-feature1

# Force remove (with uncommitted changes)
git worktree remove --force ../algorithms-feature1
```

## Real-World Workflow

### Scenario: Working on feature while checking main

```bash
# 1. Currently in algorithms/ (main branch)
# 2. Need to work on new feature

git worktree add ../algorithms-feature1 -b feature1

# 3. Open in new VS Code window
code ../algorithms-feature1

# 4. Now you have:
#    - Window 1: algorithms/ (main) - reference
#    - Window 2: algorithms-feature1/ (feature1) - development

# 5. When done
git worktree remove ../algorithms-feature1
```

### Scenario: Urgent hotfix while developing

```bash
# Currently working on feature1
# Urgent bug in production (main branch)

# 1. Create hotfix worktree
git worktree add ../algorithms-hotfix -b hotfix/urgent-bug

# 2. Fix bug in hotfix folder
cd ../algorithms-hotfix
# ... fix ...
git commit -m "Fix urgent bug"
git push

# 3. Merge to main
git checkout main
git merge hotfix/urgent-bug

# 4. Clean up
git worktree remove ../algorithms-hotfix

# 5. Return to feature1 - still intact!
cd ../algorithms-feature1
```

## Key Benefits

### 1. No Context Switching

- No need to stash changes
- No need to commit incomplete work
- Switch by changing folders/windows

### 2. Parallel Development

```bash
# Run server on main
cd algorithms/
npm start  # Running...

# Develop feature in parallel
cd algorithms-feature1/
# Edit files while server runs
```

### 3. Easy Comparison

- Open both branches side-by-side
- Compare files directly in VS Code
- No git diff needed

### 4. Independent AI Conversations

- Each VS Code window = separate Claude/Copilot chat
- Context stays separate
- Use /fork for different approaches

## Best Practices

### ✅ DO

```bash
# Keep main in original folder
algorithms/          (main) ← Primary workspace

# Create temporary worktrees for features
git worktree add ../algorithms-feature-x -b feature-x

# Remove when done
git worktree remove ../algorithms-feature-x
```

### ❌ DON'T

```bash
# Don't create worktree for main
algorithms-main/     ← Unnecessary
algorithms-feature1/

# Don't keep too many worktrees
# Clean up after merging
```

## Common Patterns

### Pattern 1: Quick Feature

```bash
git worktree add ../algo-feat -b quick-feature
cd ../algo-feat
# ... work ...
git push -u origin quick-feature
# Create PR, merge
git worktree remove ../algo-feat
```

### Pattern 2: Long-running Development

```bash
# Keep worktree for ongoing work
git worktree add ~/projects/algo-v2 -b version-2

# Work for weeks/months
# Original repo stays on main
```

### Pattern 3: Code Review

```bash
# Checkout PR branch for review
git worktree add ../algo-review pr/123

# Review in separate window
code ../algo-review

# Remove after review
git worktree remove ../algo-review
```

## Syncing Changes Between Worktrees

### Main → Feature

```bash
# 1. Work on main
cd algorithms/
git commit -m "Update shared code"
git push

# 2. Bring changes to feature
cd ../algorithms-feature1/
git merge main
# or
git rebase main
```

### Feature → Main

```bash
# 1. Complete feature
cd algorithms-feature1/
git push

# 2. Merge to main
cd ../algorithms/
git merge feature1
git push
```

## Quick Reference

| Task                       | Command                               |
| -------------------------- | ------------------------------------- |
| Create new branch worktree | `git worktree add <path> -b <branch>` |
| Checkout existing branch   | `git worktree add <path> <branch>`    |
| List all worktrees         | `git worktree list`                   |
| Remove worktree            | `git worktree remove <path>`          |
| Force remove               | `git worktree remove --force <path>`  |
| Open in VS Code            | `code <path>`                         |

## When to Use Worktrees

### Use When:

- ✅ Need to reference multiple branches simultaneously
- ✅ Running server while developing features
- ✅ Urgent hotfix while working on feature
- ✅ Comparing different implementations
- ✅ Reviewing PRs while maintaining your work

### Don't Use When:

- ❌ Simple branch switching is enough
- ❌ Only working on one thing at a time
- ❌ Disk space is limited

## History

- **Released**: Git 2.5.0 (July 27, 2015)
- **Stable**: Git 2.7.0+ (January 2016)
- **Enhanced**: Git 2.15.0+ (grep --worktrees support)

---

**Remember**: Worktrees = Multiple branches in different folders, existing at the same time!
