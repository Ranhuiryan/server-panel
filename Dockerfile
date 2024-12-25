FROM node:18-alpine

WORKDIR /app

# 安装基础依赖
RUN apk add --no-cache git

# 安装 expo-cli
RUN npm install -g expo-cli

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建优化的生产版本
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"] 