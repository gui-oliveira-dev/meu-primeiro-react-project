type propsTitle = {
  content: string
}

function Title(props: propsTitle) {
  const { content } = props
  return (
    <h2 className="title-section">{content}</h2>
  )
}

export default Title