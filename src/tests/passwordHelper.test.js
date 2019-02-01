const assert = require('assert')
const PasswordHelper = require('../helpers/passwordHelper')

const SENHA = 'Walefe@321321'
const HASH = '$2b$04$KHohqGKBiSzRTmdq6dIhn.k4F.K3/bXTu0xWnghazKhpYfQmNsKYu'

describe('UserHelper teste suite', function() {
    it('deve gerar um hash a partir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA) 
        
        assert.ok(result.length > 10)
    })

    it('deve comparar uma senha e seu hash', async () => {
        const result = await PasswordHelper.comparePassword(SENHA, HASH)
        assert.ok(result)
    })
})