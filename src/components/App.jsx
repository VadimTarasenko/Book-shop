import React, { Component } from 'react';
import { Container, Button, Card } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import ChecksInfo from '../containers/ChecksInfo';

class App extends Component {

  state = {
    showChecks: false
  }

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  handleShowChecks = () => {
    this.setState({ showChecks: true });
  }

  handleCloseChecks = () => {
    this.setState({showChecks: false});
  }

  render() {
    const { books, isReady, setFilter } = this.props;
    const { showChecks } = this.state;
    return (
      <Container>
        <Menu handleShowChecks={this.handleShowChecks.bind(this)} />
        <Filter setFilter={setFilter} />
        <Card.Group itemsPerRow={5}>
          {!isReady
            ? 'Загрузка ...'
            : books.map((book, i) => (<BookCard {...book} key={i} />))}
        </Card.Group>
        <>
          <ChecksInfo isOpen={showChecks} handleClose={this.handleCloseChecks.bind(this)}/>
          <ToastContainer />
        </>
      </Container>
    )
  }
}


export default App;