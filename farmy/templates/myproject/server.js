const express = require('express');
const cors = require('cors'); // 예시: CORS 미들웨어
const morgan = require('morgan'); // 예시: 로깅 미들웨어

const app = express();

// 미들웨어 추가
app.use(cors()); // CORS 미들웨어 추가
app.use(morgan('dev')); // HTTP 요청 로깅
app.use(express.json()); // 요청 본문을 JSON 형태로 파싱

// 라우트 추가
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
