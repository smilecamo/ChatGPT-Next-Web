FROM node:20

# 创建工作目录
WORKDIR /usr/src/app

# 复制package.json和package-lock.json文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建Next.js应用
RUN npm run build

# 安装PM2
RUN npm install pm2 -g

# 启动PM2和Next.js应用
CMD ["npm", "run", "pro"]