# GitHub 上传操作指南

## 方法一：完整上传（包含所有视频，推荐）

### 1. 初始化 Git 仓库
```powershell
cd "c:\Users\asus\Desktop\作品集"
git init
```

### 2. 添加所有文件
```powershell
git add .
```

### 3. 提交文件
```powershell
git commit -m "Initial commit: 添加个人作品集网站"
```

### 4. 关联远程仓库（将 YOUR_USERNAME 和 YOUR_REPO 替换成您的）
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### 5. 推送到 GitHub
```powershell
git branch -M main
git push -u origin main
```

---

## 方法二：使用 Git LFS 处理大文件（可选，如果遇到问题）

如果遇到文件过大的错误，可以使用 Git LFS：

### 1. 安装 Git LFS
```powershell
git lfs install
```

### 2. 追踪大文件（视频文件）
```powershell
git lfs track "*.mp4"
git lfs track "*.MP4"
```

### 3. 添加 .gitattributes 文件
```powershell
git add .gitattributes
```

### 4. 然后继续正常提交和推送
```powershell
git add .
git commit -m "Initial commit: 添加个人作品集网站"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 方法三：不上传视频文件（最简单，但不推荐）

如果您不想上传大视频文件，可以创建 `.gitignore` 文件：

### 1. 创建 .gitignore 文件
在项目根目录创建 `.gitignore` 文件，内容如下：
```
# 忽略所有视频文件
*.mp4
*.MP4

# 忽略 AIGC 文件夹
AIGC/

# 忽略 AI 项目文件夹中的视频
AI项目/**/*.mp4
```

### 2. 然后正常提交
```powershell
git init
git add .
git commit -m "Initial commit: 添加个人作品集网站（不含视频文件）"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 常见问题

### Q: 如果忘记用 Git LFS 怎么办？
A: 如果已经推送失败，可以重置：
```powershell
git reset --soft HEAD~1
git lfs track "*.mp4"
git add .
git commit -m "Initial commit with LFS"
git push -u origin main
```

### Q: 推送时要求输入用户名密码怎么办？
A: GitHub 已不再支持密码登录，需要使用 Personal Access Token（个人访问令牌）：
1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 "repo" 权限
4. 复制生成的 token
5. 在命令行输入密码时，粘贴这个 token

### Q: 网络连接慢怎么办？
A: 可以考虑：
- 使用代理
- 或使用 GitHub Desktop 客户端（图形界面工具）

---

## 推荐：GitHub Desktop（图形界面工具）

如果您不熟悉命令行，可以使用 GitHub Desktop：
1. 下载：https://desktop.github.com/
2. 安装并登录
3. File → Add Local Repository → 选择您的项目文件夹
4. 点击 "Publish repository" 按钮
5. 选择公开或私有，点击发布

---

## 我的建议

**如果文件总大小不超过 1GB**，我推荐使用**方法一**（完整上传），这样您的作品集网站可以直接通过 GitHub Pages 部署和访问。

**如果文件过大**，可以考虑：
1. 将视频上传到其他平台（如B站、七牛云、阿里云OSS）
2. 在代码中引用外部链接
3. GitHub 仓库只存代码，不存大文件
