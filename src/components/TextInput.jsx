import PropTypes from "prop-types"

TextInput.PropTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({ value, setValue}) {
    return (
        <div>
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                name="title"
                id="title"
                value={value}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}