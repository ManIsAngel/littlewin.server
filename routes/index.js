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
const Github = require('controllers/github')
const Site = require('controllers/site')
const Like = require('controllers/like')
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
  .post('/user', User.login)
  .get('/user', User.get)
  .put('/user', middleware.verifyToken, User.modify)

  .post('/category', middleware.verifyToken, Category.create)
  .get('/category', Category.list)
  .get('/category/:id', Category.get)
  .put('/category/:id', middleware.verifyToken, Category.modify)
  .delete('/category/:id', middleware.verifyToken, Category.delete)

  .post('/tag', middleware.verifyToken, Tag.create)
  .get('/tag', Tag.list)
  .delete('/tag', middleware.verifyToken, Tag.deleteList)
  .get('/tag/:id', Tag.get)
  .put('/tag/:id', middleware.verifyToken, Tag.modify)
  .delete('/tag/:id', middleware.verifyToken, Tag.delete)

  .post('/article', middleware.verifyToken, Article.create)
  .get('/article', Article.list)
  .patch('/article', middleware.verifyToken, Article.patch)
  .delete('/article', middleware.verifyToken, Article.deleteList)
  .get('/article/:id', Article.get)
  .put('/article/:id', middleware.verifyToken, Article.modify)
  .delete('/article/:id', middleware.verifyToken, Article.delete)

  .post('/comment', Comment.create)
  .get('/comment', Comment.list)
  .patch('/comment', middleware.verifyToken, Comment.patch)
  .delete('/comment', middleware.verifyToken, Comment.deleteList)
  .get('/comment/:id', Comment.get)
  .put('/comment/:id', middleware.verifyToken, Comment.modify)
  .delete('/comment/:id', middleware.verifyToken, Comment.delete)

  .get('/site', Site.get)
  .put('/site', middleware.verifyToken, Site.modify)

  .get('/qiniu', Qiniu.getToken)
  .get('/github', Github.list)

  .post('/like', Like.like)

module.exports = router
