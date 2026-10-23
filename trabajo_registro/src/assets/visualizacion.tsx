
interface Pedido {
  nombre_cliente: string;
  cantidad: string;
  producto: string;
  estado: string;
}

interface Props {
  pedidos: Pedido[];
  eliminar: (indice: number) => void;
}

function ListaPedidos({ pedidos, eliminar }: Props) {
  return (
    <div>
      <h2>Lista de pedidos</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre del cliente</th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido, indice) => (
            <tr key={indice}>
              <td>{pedido.nombre_cliente}</td>
              <td>{pedido.cantidad}</td>
              <td>{pedido.producto}</td>
              <td>{pedido.estado}</td>
              <td>
                <button onClick={() => eliminar(indice)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPedidos;
