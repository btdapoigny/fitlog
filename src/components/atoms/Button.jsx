import { Link } from 'react-router'

export function Button({ label, path, handleClick }) {
  return (
    <>
      { path && <Link className="button" to={ path }>{ label }</Link> }
      { !path && <button className="button" onClick={ handleClick }>{ label }</button> }
    </>
  )
}