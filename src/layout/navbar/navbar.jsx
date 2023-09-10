import './navbar.scss'


const Navbar = () => {
  return (
    <div className="app-navbar">
      <section className="left-side">
        <a href='#home'>Platform</a>
      </section>

      <ul className="right-side">
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#reviews'>Reviews</a></li>
        <li><a href='#features'>Features</a></li>
        <li><a href='#pricing'>Pricing</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    </div>
  )
}

export default Navbar