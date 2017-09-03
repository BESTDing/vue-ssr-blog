const Router = require('koa-router')
const article = require('../models/index').article

let articleRouter = new Router()
// home
articleRouter
  .get('/', async (ctx) => {
    ctx.body = await article.articleList(parseInt(ctx.query.limit))
  })
  .get('/title', async(ctx) => {
    ctx.body = await article.findArticleByTitle(ctx.query.title)
  })
  .get('/className', async (ctx) => {
    ctx.body = await article.getArticlesByClassify(ctx.query.className)
  })
module.exports = articleRouter