
import { useState } from "react";
import RegistroForm from "./formulario";
import ListaPedidos from "./visualizacion";
import "./estilos.css";


interface Pedido {
  nombre_cliente: string;
  cantidad: string;
  producto: string;
  estado: string;
}

export function Componente_Principal() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  function registrar(pedido: Pedido) {
    setPedidos([...pedidos, pedido]);
  }

  function eliminar(indice: number) {
    setPedidos(
      pedidos.filter((_, posicion) => posicion !== indice)
    );
  }

  return (
    <div className="contenedor">
      <h1>Sistema de Registro Distribuciones El Progreso</h1>

      <RegistroForm registrar={registrar} />

      <h3>Total de pedidos: {pedidos.length}</h3>

      <ListaPedidos
        pedidos={pedidos}
        eliminar={eliminar}
      />
    </div>
  );
}
