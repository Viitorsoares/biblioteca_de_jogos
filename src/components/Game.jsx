import PropTypes from "prop-types"

Game.PropTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Game({ title, cover, onRemove}) {
    return (
        <div>
            <img src={cover} alt="" />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>Remover</button>
            </div>
          </div>
    )
}