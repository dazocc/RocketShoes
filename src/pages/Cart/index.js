import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img 
               src="https://static.netshoes.com.br/produtos/chuteira-adidas-predator-archive-fg/06/NQQ-2681-006/NQQ-2681-006_zoom1.jpg" 
               alt="Chuteira"
              />
            </td>
            <td>
              <strong>Chuteira Fera</strong>
              <span>R$999,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$1999,98</strong>
            </td>
            <td>
              <button type="button" >
                <MdDelete size={20} color="#7159c1"></MdDelete>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$999,99</strong>
        </Total>
      </footer>
    </Container>
  );
}
