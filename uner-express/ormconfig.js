[
  {
    "name": "test",
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DB_NAME,
    "synchronize": true, // 배포 환경에선 사용 금지
    "logging": true,
    "drop"
    "entities": [
      "src/schemas/*.ts"
    ],
    "subscribers": [
      "src/migration/*.ts"
    ],
    "migrations": [
      "src/migration/*.ts"
    ],
  },
  // production 시 배열에 추가
];