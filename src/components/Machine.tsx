import React, { useState, useEffect } from "react";
import s from './Machine.module.css';
import json from './ListItems.json';

export default function Machine() {

	const deviceListRef = React.useRef(null);
	// init balance
	const [balance, setBalance] = useState(25);
	const [devices, setDevices] = useState(json.devices);

	useEffect(() => {
		if (devices) {
			const { scrollHeight } = deviceListRef.current;
			deviceListRef.current.scrollTop = scrollHeight;
		}
	}, [devices]);

	const addNewDevice = () => {
		const newId = devices.length > 0 ? Number(devices[devices.length - 1].id) + 1 : 1;
		const newDevice = {
			id: String(newId),
			label: "Washer " + newId,
			status: "Busy"
		}

		const l = devices.slice();
		l.push(newDevice)
		setDevices(l);
	}

	const removeDevice = (idx: number) => {
		const l = devices.slice();
		l.splice(idx, 1);
		setDevices(l);
	}

	const addBalance = (e:any) => {
		e.preventDefault();
		setBalance(balance + 5);
	}

	return (
		<div>
			<div className="header">
				<div className={s.header}>
					<span>Select a machine</span>
					<button type="button" onClick={addNewDevice}>+</button>
				</div>
			</div>
			<div className="content" ref={deviceListRef}>
				{devices.length > 0 ? devices.map( (dev, idx) =>
					<div key={dev.id} className={s.device}>
						<div>
							<div className={s.dId}>{dev.id}</div>
							<div className={s.dContent}>
								<span>{dev.label}</span>
								<span>{dev.status}</span>
							</div>
						</div>
						<button type="button" onClick={() => removeDevice(idx)}><span /></button>
					</div>
				) : <p style={{fontSize: '14px', color: 'grey', textAlign: 'center'}}>No available machine.</p>}
			</div>

			<div className={s.balanceBar}>
				<span>Balance: ${balance.toFixed(2)}</span>
				<button type="button" onClick={addBalance}>+</button>
			</div>
		</div>
	);
}
