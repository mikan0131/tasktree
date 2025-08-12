import styled from "styled-components";

export type AccountImageBadgeProps = {
    /**
     * 中の画像のURL 
     */
    imageUrl: string
    /**
     * サイズ（半径）
     */
    size: number
}

const Imagebadge = styled.img<{size: number}>`
    width: ${({ size }) => size * 2}px;
    height: ${({ size }) => size * 2}px;
    border-radius: 50%;
    border: 1px solid gray;
`

export const AccountImageBadge = (props: AccountImageBadgeProps) => {
    const { imageUrl, size } = props
    return (
        <Imagebadge src={imageUrl} size={size} alt="ユーザーの画像" />
    )
}