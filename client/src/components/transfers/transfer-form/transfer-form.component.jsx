import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { newTransfer } from '../../../store/actions/transfers.actions';

// Components
import Modal from '../../ui/modal/modal.component';
import Input from '../../ui/input/input.component';
import Button from '../../ui/button/button.component';

import classes from './transfer-form.module.css';

const TransferForm = ({ onHideModal }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => 
		{ return state.users.user });

	// Refs
	const accountInputRef = useRef();
	const amountInputRef = useRef();
	const dateInputRef= useRef()

	const submitHandler = e => {
		e.preventDefault();

		const accountNumber = +accountInputRef.current.value;
		const amount = +amountInputRef.current.value;
		const date= dateInputRef.current.value

		if (!accountNumber || !amount) {
			return;
		}


		dispatch(newTransfer(user.accountNumber, accountNumber, amount,date));

		onHideModal();
	};

	return (
		<Modal onClick={onHideModal}>
			<h3 className={classes.title}>
				To make a transfer, please enter the following information
			</h3>
			<form onSubmit={submitHandler} className={classes['transfer-form']}>
				<Input
					label='Account number'
					ref={accountInputRef}
					input={{
						id: `account`,
						type: 'number',
					}}
				/>
				<Input
					label='Amount'
					ref={amountInputRef}
					input={{
						id: `amount`,
						type: 'number',
						min: '1',
						step: '1',
					}}
				/>
				<Input
					label='Date'
					ref={dateInputRef}
					input={{
						id: `date`,
						type: 'date',
						
					}}
				/>

				<Button>Transfer!</Button>
			</form>
		</Modal>
	);
};

export default TransferForm;
