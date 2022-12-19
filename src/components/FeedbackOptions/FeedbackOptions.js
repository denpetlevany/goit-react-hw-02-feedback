import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={s.list}>
            {Object.keys(options).map(key => (
                <li className={s.item} key={key}>
                    <button
                        type="button"
                        className={s[key]}
                        onClick={() => onLeaveFeedback(key)}
                    >
                        {key}
                    </button>
                </li>
            ))}
        </ul>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};