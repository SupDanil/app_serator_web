const {Router} = require('express');
const Link = require('../Models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router();
const Nickname = require('../Models/NickNames')

router.post('/generate', async (req, res) => {
    try {
        const newNick = req.body.nickname

        const nick = new Nickname({
            nickname: newNick,
        })

        await nick.save()

        res.status(201).json({nick})


    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

router.get('/',  async (req, res) => {
    try {
        const nicks = await Nickname.find()
        res.json(nicks)
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

module.exports = router