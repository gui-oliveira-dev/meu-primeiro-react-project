type propsSubtitle = {
  content: string
}

function SubTitle(props: propsSubtitle) {
  const { content } = props;
  return (
    <h3 className="subtitle-section">{content}</h3>
  )
}

export default SubTitle;