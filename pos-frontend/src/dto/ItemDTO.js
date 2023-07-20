class ItemDTO {
    constructor(item_code, item_name, unit_price, qty_on_hand) {
        this.item_code = item_code;
        this.item_name = item_name;
        this.unit_price = unit_price;
        this.qty_on_hand = qty_on_hand;
    }
}

export default ItemDTO;
