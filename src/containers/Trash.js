import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import * as checksActions from '../actions/checks';
import Trash from '../components/Trash';
import { toast } from 'react-toastify';

const submitOrder = () => {
  toast.info('Ваше замовлення прийнято', {
    autoClose: true
  });
}

const mapStateToProps = state => ({
  submitOrder
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
  ...bindActionCreators(checksActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Trash);