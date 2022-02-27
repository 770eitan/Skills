import { Router } from 'express'
// import the Todo data
import * as skillsCtrl from '../controllers/skills.js'
import * as skillsDB from "../data/skills-db.js"


const router = Router()

/* GET users listing. */
// GET - localhost:3000/todos
router.get('/', skillsCtrl.index)
// GET - localhost:3000/todos/:id
router.get('/new', skillsCtrl.new)

router.get("/:id", skillsCtrl.show)


router.post('/', skillsCtrl.create)  
router.delete('/:id', skillsCtrl.delete)

export {router}
