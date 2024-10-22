// src/controllers/logController.js

exports.logAdminAction = async (adminId, action, details) => {
    try {
      await Log.create({ adminId, action, details });
    } catch (error) {
      console.error('Failed to log admin action', error);
    }
  };
  
  // Example usage in a controller
  const { logAdminAction } = require('./logController');
  
  exports.deleteProduct = async (req, res) => {
    const { adminId } = req.user;
    const { productId } = req.params;
  
    try {
      await Product.delete(productId);
      await logAdminAction(adminId, 'DELETE_PRODUCT', `Deleted product with ID ${productId}`);
      res.status(200).send('Product deleted');
    } catch (error) {
      res.status(500).send('Failed to delete product');
    }
  };
  