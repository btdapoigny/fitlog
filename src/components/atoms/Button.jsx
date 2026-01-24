import { Link } from 'react-router'

export function Button({ label, path, handleClick, ...props }) {
  return (
    <>
      { path && <Link className="button" to={ path }>{ label }</Link> }
      { !path && <button className="button" { ...props } onClick={ handleClick }>{ label }</button> }
    </>
  )
}