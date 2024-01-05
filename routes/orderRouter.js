const express = require('express')
const orderRouter = express.Router()
const orderController = require('../controllers/orderController')
const protect = require('../middleware/protect')
const checkAdmin = require('../middleware/checkAdmin')

orderRouter.route('/').get(protect, checkAdmin, orderController.getOrders)
orderRouter.route('/').post(protect, orderController.addOrder)
orderRouter.route('/user').get(protect, orderController.getOrderByUserId)
orderRouter.route('/:id').get(protect, orderController.getOrderDetails)
orderRouter.route('/:id').post(protect, orderController.updateOrderToDelivered)
orderRouter.route('/:id/pay').patch(protect, orderController.updateOrderToPaid)
// orderRouter.route('/').patch(protect, orderController.updateOrderToPaid)
// admin----------------------------------------------------------------------------------------->
// orderRouter.route('/admin').get(protect, checkAdmin, orderController.getOrderByAdminId)

module.exports = orderRouter