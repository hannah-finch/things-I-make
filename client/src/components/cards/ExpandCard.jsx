// use props to pass in a component
// Child component to info "cards"

const ExpandCard = ({ expandInfo: Component, thing}) => {
  // console.log(props)
  // console.log(thing)
  return(
    <>
      <div className="card">
        {/* {thing.title}
      <h1>{thing.title}</h1> */}
      <Component></Component>
      </div>
    </>
  )
}

export default ExpandCard;