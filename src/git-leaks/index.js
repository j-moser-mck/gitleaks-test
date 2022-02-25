import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>GitLeaks test.</div>
	);
};

createCustomElement('git-leaks', {
	renderer: {type: snabbdom},
	view,
	styles
});
