const controllers = {
    insertNewProducto : "INSERT INTO productos(producto_codigo,producto_nombre,producto_valor,prodcuto_pvp) VALUES( cast($1 as varchar ), cast( $2 as varchar ), cast( $3 as numeric ), cast( $4 as numeric ))"
}
export default controllers;
