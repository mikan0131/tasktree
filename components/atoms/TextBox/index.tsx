import styled from 'styled-components'

export type TextBoxProps = {
    /**
     * ボックスの高さ
     */
    height?: number
    /**
     * マージン
     */
    margin?: string
    /**
     * 中のテキスト
     */
    children?: React.ReactNode
    /**
     * 文字の色
     */
    color: string
    /**
     * 背景色
     */
    backgroundColor: string
    /**
     * 文字の大きさ
     */
    fontSize: number
}

const Textbox = styled.p<TextBoxProps>`
    height: ${({ height }) => height}px;
    width: fit-content;
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize}px;
    
`

export const TextBox = (props: TextBoxProps) => {
    return (
        <Textbox {...props}>
            {props.children}
        </Textbox>
    )
}