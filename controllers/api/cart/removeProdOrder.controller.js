const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id: product_id } = req.params;

    if (!product_id) throw new Error("El id no fue recibido");

    const [order] = await getOrderPending(req);

    await db.OrderProduct.destroy({
      where: {
        order_id: order.id,
        product_id,
      },
    });

    res.status(200).json({
      ok: true,
      msg: "Producto eliminado del carrito con éxito",
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }

};