import { TextBox } from "@/components/atoms/TextBox";
import { Logo } from "@/components/molecules/Logo";

export type HeaderProps = {
    /**
     * ユーザーがログインしているかどうか
     */
    Login: boolean
}

const HeaderList = () => {
    return (
        <li style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <TextBox
                color="#ffffff"
                backgroundColor="transparent"
                fontSize={20}
                toLink="#"
                border={true}
                margin="10px"
            >使い方</TextBox>
            <TextBox
                color="#ffffff"
                backgroundColor="transparent"
                fontSize={20}
                toLink="#"
                border={true}
                margin="10px"
            >TaskTreeについて</TextBox>
        </li>
    )
}

export const Header = (props: HeaderProps) => {
    return (
        <div style={{display: "flex", backgroundColor: "#00fff2", alignItems: 'center', height: "60px"}}>
            <div style={{margin: "10px"}}>
                <Logo />
            </div>
            <HeaderList />
        </div>
    )
}