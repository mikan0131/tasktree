import { TextBox } from "@/components/atoms/TextBox";
import type { TextBoxProps } from "@/components/atoms/TextBox";
import styled from "styled-components";

export type LinkProps = {
    /** 
     * リンクの行き先
    */
    toLink: string
}

export type LinkTextProps = LinkProps & TextBoxProps

const OriginalLink = styled.a<TextBoxProps>`
    text-decoration: none;
    transition: border-bottom 0.3s ease;
    border-bottom: 3px solid transparent;
    height: ${({ height }) => height};
    display: inline-block;
    margin: 0;
    &:hover {
        border-bottom: 3px solid #a5a5a5;
    }
`

export const LinkText = (props: LinkTextProps) => {
    return (
        <OriginalLink href={props.toLink} {...props}>
            <TextBox {...props}>
                {props.children}
            </TextBox>
        </OriginalLink>
    )
}