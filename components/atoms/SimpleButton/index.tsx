import styled from 'styled-components'

type SimpleButtonProps = {
    /**
     * ボタンの文字の色
     */
    color: string;
    /**
     * 背景の色
     */
    backgroundColor: string
    /**
     * 中のテキスト
     */
    children: React.ReactNode
    /**
     * 枠線の設定
     */
    border: string
}

const states = {
    primary: {
        color: '#ffffff',
        backgroundColor: '#111111',
        border: 'none',
    },
    danger: {
        color: '#ffffff',
        backgroundColor: '#ff0000',
        border: "1px solid red",
    },
}

const Simplebutton = styled.button<SimpleButtonProps>`
    color: ${({color}) => color};
    background-color: ${({backgroundColor}) => backgroundColor};
    border: none;
    border-radius: 8px;
    padding: 8px;
    border: ${({border}) => border};
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`

export const SimpleButton = (props: SimpleButtonProps) => {
    return (
        <Simplebutton {...props}>
            {props.children}
        </Simplebutton>
    )
}