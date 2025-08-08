import { NodeNextRequest } from 'next/dist/server/base-http/node'
import styled, { css } from 'styled-components'

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
    /**
     * 下の線をつけるかどうか
     */
    border?: boolean
    /**
     * リンク先
     */
    toLink?: string
}

const borderAnimation = css`
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        transform-origin: center;
        transform: scaleX(0);
        background-color: #cacaca;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }

        &:hover{
        cursor: pointer;
    }
`

const Textbox = styled.p<TextBoxProps>`
    position: relative;
    height: ${({ height }) => height}px;
    width: fit-content;
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize}px;
    ${({ border }) => (border ? borderAnimation : "")}
    text-decoration: none;
`

export const TextBox = (props: TextBoxProps) => {
    return (
        <Textbox {...props}>
            <a style={{textDecoration: "none", color: props.color}} href={props.toLink}>{props.children}</a>
        </Textbox>
    )
}