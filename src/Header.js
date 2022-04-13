import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import useWindowSize from './hooks/useWindowSize'


const icon = width => {

  const components
    = [ (<FaMobileAlt />), (<FaTabletAlt />), (<FaLaptop />) ]
  
  const widths = [ 768, 992 ]

  return (function getComponent (i) {

    if (i >= widths.length) { return components [ i ] }

    return width < widths [ i ] ? components [ i ] : getComponent (++i)

  }) (0)

}


const Header = ({ title }) => {

  const { width } = useWindowSize ()

  return (
    <header className="Header">
      <h1>{title}</h1>
      {icon (width)}
    </header>
  )

}


export default Header