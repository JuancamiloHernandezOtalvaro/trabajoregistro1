
interface Props {
  registrar: (pedido: {
    nombre_cliente: string;
    cantidad: string;
    producto: string;
    estado: string;
  }) => void;
}

function RegistroForm({ registrar }: Props) {
  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const formulario = evento.currentTarget;

    const datos = new FormData(formulario);

    registrar({
      nombre_cliente: String(datos.get("nombre_cliente")),
      cantidad: String(datos.get("cantidad")),
      producto: String(datos.get("producto")),
      estado: String(datos.get("estado")),
    });

    formulario.reset();
  }

  return (
    <form onSubmit={enviar} className="formulario">
      <h2>Registrar pedido</h2>

      <input
        name="nombre_cliente"
        placeholder="Nombre del cliente"
        required
      />

      <input
        name="cantidad"
        type="number"
        placeholder="Cantidad"
        min="1"
        required
      />

      <input
        name="producto"
        placeholder="Producto"
        required
      />

      <select name="estado" required defaultValue="">
        <option value="" disabled>
          Seleccionar estado del pedido
        </option>
        <option value="Pendiente">Pendiente</option>
        <option value="En proceso">En proceso</option>
        <option value="Entregado">Entregado</option>
      </select>

      <button type="submit">Registrar pedido</button>
    </form>
  );
}

export default RegistroForm;
