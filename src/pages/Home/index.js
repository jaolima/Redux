import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
          <img 
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x" 
          alt=""
          />
          <strong>Tênis muito doido</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
      </li>

      <li>
          <img 
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x" 
          alt=""
          />
          <strong>Tênis muito doido</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
      </li>

      <li>
          <img 
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x" 
          alt=""
          />
          <strong>Tênis muito doido</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
      </li>

      <li>
          <img 
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x" 
          alt=""
          />
          <strong>Tênis bonitim</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
      </li>

      <li>
          <img 
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-corre-1/08/D22-3707-008/D22-3707-008_zoom2.jpg?ims=326x" 
          alt=""
          />
          <strong>Tênis muito doido</strong>
          <span>R$129,90</span>

          <button type="button">
            <div>
                <MdAddShoppingCart size={16} color="#FFF"/> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
      </li>
    </ProductList>
  );
}
