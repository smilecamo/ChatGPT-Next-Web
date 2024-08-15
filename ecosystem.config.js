module.exports = {
  apps: [
    {
      name: "chatgpt-next-web", // 应用程序名称
      script: "./node_modules/next/dist/bin/next", // 要执行的脚本
      args: "start", // 传递给脚本的参数
      instances: "2", // 启动的实例数量
      exec_mode: "cluster", // 执行模式为集群
      restart_delay: 5000, // 在重启前延迟 5 秒
      max_restarts: 5, // 最多重启 5 次
    },
  ],
};
