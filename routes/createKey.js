//在当前文件夹下node creatKey.js 去生成RSA私钥和公钥


const crypto = require('crypto')
function generateKeyPair() {
  const keyPair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 1024, // RSA密钥长度
  });
  return {
    publicKey: keyPair.publicKey.export({ type: 'pkcs1', format: 'pem' }),
    privateKey: keyPair.privateKey.export({ type: 'pkcs1', format: 'pem' }),
  };
}

// 使用函数并保存密钥
const { publicKey, privateKey } = generateKeyPair();
console.log('公钥:', publicKey);
console.log('私钥:', privateKey);