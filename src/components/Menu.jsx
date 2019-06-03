import React from 'react';
import { Menu, Popup, Input } from 'semantic-ui-react';
import Trash from '../containers/Trash';

const MenuComponent = ({ totalPrice, count, items, handleShowChecks }) => (
	<Menu>
		<Menu.Item name="browse">
			Магазин книг
		</Menu.Item>
		<Menu.Menu position="right">
			<Menu.Item name="checks" as='a' onClick={handleShowChecks}>
				Історія замовлень
			</Menu.Item>
			<Menu.Item name="signup">
				Всього: &nbsp; <b>{totalPrice}</b> &nbsp; грн.
			</Menu.Item>
			<Popup
				trigger={
					<Menu.Item name="help">
						Корзина (<b>{count}</b>)
					</Menu.Item>
				}
				content={<div style={{ width: '400px' }}><Trash books={items} /></div>}
				on="click"
				hideOnScroll
			/>
		</Menu.Menu>
	</Menu>
);

export default MenuComponent;