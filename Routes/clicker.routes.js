const {Router} = require('express')
const Clicks = require('../Models/Ckicks')
const router = Router();

router.post('/',  async (req, res) => {
    try {
        const click = await Clicks.findOne()

        if(click.length == 0){

            const newClick = new Clicks({
                clicks: 0,
            })
            await newClick.save()
        }else{
            click.clicks += 1
            await click.save()
        }

    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

module.exports = router



