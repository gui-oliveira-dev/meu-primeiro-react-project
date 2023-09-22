type propsText = {
  content: string
}

function Text(props: propsText) {
  const { content } = props
  return(
    <p className="text-section">{content}</p>
  )
}

export default Text