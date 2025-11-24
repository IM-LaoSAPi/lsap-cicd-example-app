const request = require('supertest');
const app = require('app.js'); // 依專案實際路徑修改
// ihfsl
// shdkf
describe('/time endpoint', () => {
  it('should return valid ISO time string', async () => {
    const res = await request(app).get('/time');
    expect(res.statusCode).toBe(200);

    expect(res.body).toHaveProperty('time');

    // 簡單檢查是不是 ISO 格式（能被 Date parse）
    const t = new Date(res.body.time);
    expect(t.toISOString()).toBe(res.body.time);
  });
});
