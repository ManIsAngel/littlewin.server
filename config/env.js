/**
 * @file 项目配置文件
 * @author littlewin(littlewin.wang@gmail.com)
 *
 * @AUTH 默认账户
 * @mongo && port  数据库连接配置
 * @QINIU 七牛密钥
 * @GITHUB github账号
 *
 * @development 开发环境配置
 * @production  生产环境配置
 */

const AUTH = {
  default: { name: 'littlewin', password: 'abcd@1234' },
  jwtTokenSecret: 'littlewin'
}

const APP = {
  ROOT_PATH: __dirname,
  LIMIT: 16
}

const QINIU = {
  accessKey: '-rQlXW3eYxSuLxyJJfBWDAuYVB3VMMEvpT7DcHUI',
  secretKey: 'MMZhc-eBH-9Pb8riQmkpYZfkRxGql24Zuz2XzI7o',
  bucket: 'littlewin',
  origin: 'http://7xpot0.com1.z0.glb.clouddn.com',
  uploadURL: 'http://up-z0.qiniu.com'
}

const GITHUB = {
  account: 'littlewin-wang',
}

const session = {
  key: 'littlewin',
  maxAge: 604800000,
  overwrite: true,
  signed: true,
}

const EMAIL = {
  account: 'littlewin.wang@qq.com',
  password: 'zfnpzulneaocbidh'
}

const AKISMET = {
  key: 'fc81d96df449',
  blog: 'http://littlewin.wang'
}

module.exports = {
  // 开发环境配置
  development: {
    AUTH,
    APP,
    QINIU,
    GITHUB,
    session,
    EMAIL,
    AKISMET,
    mongo: {
      uri: 'mongodb://localhost:27017/littlewin-dev'
    },
    port: '8090'
  },

  // 生产环境配置
  production: {
    AUTH,
    APP,
    QINIU,
    GITHUB,
    session,
    EMAIL,
    AKISMET,
    mongo: {
      uri: 'mongodb://localhost:27017/littlewin-prd'
    },
    port: '8090'
  }
}
