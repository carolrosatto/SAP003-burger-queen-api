import { Router } from 'express'
import orderController from '../controllers/orderController'

const router = Router()
router.get('/', orderController.getAll)
// router.post('/', AuthorController.addAuthor)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router