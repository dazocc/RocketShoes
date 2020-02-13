import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container, Form, List, Product, ImageProduct } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormat: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <Form>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ImageProduct source={{ uri: item.image }} />
            </Product>
          )}
        />
      </Form>
    </Container>
  );
}
