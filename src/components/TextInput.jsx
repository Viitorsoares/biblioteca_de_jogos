import PropTypes from "prop-types"

TextInput.PropTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({ id, label, value, setValue}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}