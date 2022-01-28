import styled from "styled-components"

import { useEditor } from "../hooks/useEditor"
import { LineBlock } from "./line-block"

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: 32px 0px;
`

export function Editor(){
  const { content } = useEditor()

  console.log(content)

  return (
    <EditorWrapper>
      {content.map(line => <LineBlock line={line} key={line.uuid} />)}
    </EditorWrapper>
  )
}