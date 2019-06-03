import React from 'react';
import { List, Image, Item, Icon, Button } from 'semantic-ui-react';
import TrashImage from '../resources/Trash.png';

const EmptyTrash = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={TrashImage} verticalAlign='middle' />
      <Item.Content>
        <Item.Header as='a' style={{ marginTop: '10px' }}>Ваша корзина пуста</Item.Header>
        <Item.Meta>Але це ніколи не пізно виправити:)</Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>
)

const Trash = ({ books, removeFromCart, clearCart, submitOrder, addCheck }) => (
  books.length > 0 ?
    <>
      <List selection divided verticalAlign="middle">
        {books.map((book, i) =>
          <List.Item key={i}>
            <Image avatar src={book.image} />
            <List.Content>
              <List.Header>{book.title}</List.Header>
              <List.Description>{`${book.price} грн`}</List.Description>
            </List.Content>
            <List.Content floated="right" verticalAlign='middle'>
              <div style={{ marginTop: '5px' }} onClick={removeFromCart.bind(this, book.id)} >
                <Icon name='trash alternate' size='large' />
              </div>
            </List.Content>
          </List.Item>
        )}
      </List>
      <Button onClick={event => { addCheck({ date: new Date, books }); submitOrder(); clearCart(); }} primary floated='right'>Замовити</Button>
    </>
    :
    <EmptyTrash />
);

export default Trash;