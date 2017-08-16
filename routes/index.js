/**
 * @file routes
 * @author littlewin(littlewin.wang@gmail.com)
 */

const router = require('koa-router')()
const User = require('controllers/user')
const Category = require('controllers/category')
const Tag = require('controllers/tag')
const Article = require('controllers/article')
const Comment = require('controllers/comment')
const Qiniu = require('controllers/qiniu')
const middleware = require('middlewares')

router
  .get('/', (ctx) => {
    ctx.body = {
      title: "littlewin.server API",
      version: "v1",
      author: "littlewin.wang@gmail.com",
      site: "littlewin.wang",
      guide: "https://github.com/littlewin-wang/littlewin.server/blob/master/README.md"
    }
  })
  .post('/login', User.login)
  .post('/user', middleware.verifyToken, User.create)

  .post('/category', Category.create)
  .get('/category', Category.list)
  .get('/category/:id', Category.get)
  .put('/category/:id', Category.modify)
  .delete('/category/:id', Category.delete)

  .post('/tag', Tag.create)
  .get('/tag', Tag.list)
  .get('/tag/:id', Tag.get)
  .put('/tag/:id', Tag.modify)
  .delete('/tag/:id', Tag.delete)

  .post('/article', Article.create)
  .get('/article', Article.list)
  .patch('/article', Article.patch)
  .delete('/article', Article.deleteList)
  .get('/article/:id', Article.get)
  .put('/article/:id', Article.modify)
  .delete('/article/:id', Article.delete)

  .post('/comment', Comment.create)
  .get('/comment', Comment.list)
  .patch('/comment', Comment.patch)
  .delete('/comment', Comment.deleteList)
  .get('/comment/:id', Comment.get)
  .put('/comment/:id', Comment.modify)
  .delete('/comment/:id', Comment.delete)

  .get('/qiniu', Qiniu.getToken)

module.exports = router
