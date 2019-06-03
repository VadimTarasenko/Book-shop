import React from 'react';
import { Button, Modal, Item, Image } from 'semantic-ui-react';
import BooksImage from '../resources/books.jpg';

const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}

const formatedDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  return `${day}.${month}.${year} ${hours}:${minutes}`
}

const Check = ({ date, books }) => (
  <Item>
    <Item.Image size='tiny' src={BooksImage}></Item.Image>
    <Item.Content >
      <Item.Description>{`Дата: ${date}`}</Item.Description>
      <Item.Description>
        Книги:
        {books.map((book, i) =>
          <span key={i}>{` "${book.title}"${books.length - 1 === i ? '' : ','} `}</span>
        )}
      </Item.Description>
      <Item.Meta>{`${(arraySum(books.map(book => book.price))).toFixed(2)}грн (ПДВ - ${(arraySum(books.map(book => book.price)) * 0.2).toFixed(2)}грн)`}</Item.Meta>
    </Item.Content>
  </Item>
)

const ChecksInfo = ({ checks, isOpen, handleClose }) => (
  <Modal open={isOpen}>
    {console.log(checks)}
    <Modal.Header>
      Історія замовлень
    </Modal.Header>
    <Modal.Content scrolling>
      {checks.items.length > 0 ? <>
        <Item.Group divided>
          {checks.items.map((check, i) =>
            <Check date={formatedDate(check.date)} books={check.books} key={i} />
          )}
        </Item.Group>
        <span>{`Всього зроблено замовлень на ${(arraySum(checks.items.map(check => arraySum(check.books.map(book => book.price))))).toFixed(2)}грн (ПДВ - ${(arraySum(checks.items.map(check => ((arraySum(check.books.map(book => book.price)) * 0.2))))).toFixed(2)}грн)`}</span>
      </> : <span>Історія пуста</span>}
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={handleClose}>Закрить</Button>
    </Modal.Actions>
  </Modal>
)

export default ChecksInfo;
