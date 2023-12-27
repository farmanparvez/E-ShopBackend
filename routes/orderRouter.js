const express = require('express')
const orderRouter = express.Router()
const orderController = require('../controllers/orderController')
const protect = require('../middleware/protect')
const checkAdmin = require('../middleware/checkAdmin')

orderRouter.route('/').post(protect, checkAdmin, orderController.addOrder).get(orderController.getOrders)
orderRouter.route('/user').get(protect, orderController.getOrderByUserId)
orderRouter.route('/:id').get(protect, checkAdmin, orderController.getOrderDetails).post(protect, orderController.updateOrderToDelivered)
orderRouter.route('/:id/pay').patch(protect, checkAdmin, orderController.updateOrderToPaid)
// orderRouter.route('/').patch(protect, orderController.updateOrderToPaid)
// admin----------------------------------------------------------------------------------------->
// orderRouter.route('/admin').get(protect, checkAdmin, orderController.getOrderByAdminId)

module.exports = orderRouter