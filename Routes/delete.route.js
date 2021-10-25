const {Router} = require('express')
const Nickname = require('../Models/NickNames')
const router = Router();

router.get('/:code', async (req, res) =>{

    try {
        const deletedNick = req.params.code

        const link = await Nickname.deleteOne({_id: deletedNick})

        if(link.deletedCount === 1 ){
            return res.status(200).json(true)

        } res.status(404).json('Ссылка не найдена')

    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

module.exports = router



