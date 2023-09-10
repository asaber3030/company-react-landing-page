
const Service = ({ icon, title, paragraph }) => {
  return (
    <div className="item">
      {icon}
      <h5>{title}</h5>
      <p>{paragraph}</p>
    </div>
  )
}

export default Service