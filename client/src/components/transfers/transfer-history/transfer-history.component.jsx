import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

import classes from './transfer-history.module.css';




const TransferHistory = () => {
	const user = useSelector(state => 
		{  return state.users.user });
	const transfers= useSelector(state=>state.transfers?.transfers)

	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			dispatch(getUsersTransfers(user.id));
		}
	}, [dispatch]);

	return (
		<div >
			{transfers &&
				transfers.map(transfer => <TransferItem transfer={transfer}  />)}
		</div>
	);
};

export default TransferHistory;
