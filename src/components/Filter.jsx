import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { setSearchQuery } from '../actions/filter';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
        <Menu.Item name='all' active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')}>Всі</Menu.Item>
        <Menu.Item name='price_high' active={filterBy === 'price_high'} onClick={setFilter.bind(this, 'price_high')}>Ціна (дорогі)</Menu.Item>
        <Menu.Item name='price_low' active={filterBy === 'price_low'} onClick={setFilter.bind(this, 'price_low')}>Ціна (дешеві)</Menu.Item>
        <Menu.Item name='author' active={filterBy === 'author'} onClick={setFilter.bind(this, 'author')}>Автор</Menu.Item>
        <Input icon='search' onChange={e=>setSearchQuery(e.target.value)} value={searchQuery} placeholder='Введите запрос ...'></Input>
    </Menu>
)

export default Filter;