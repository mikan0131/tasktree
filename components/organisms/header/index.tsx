import { TextBox } from "@/components/atoms/TextBox";
import { Logo } from "@/components/molecules/Logo";
import { AccountImageBadge } from "@/components/atoms/AccountImageBadge";

export type HeaderProps = {
    /**
     * ユーザーがログインしているかどうか
     */
    Login: boolean
    /**
     * ユーザー名（将来的に変更）
     */
    user?: string
}

const HeaderList = (props: HeaderProps) => {
    const { Login } = props
    return (
        <ul style={{display: "flex", alignItems: "center", width: "100%"}}>
            <TextBox
                color="#979797"
                backgroundColor="transparent"
                fontSize={20}
                toLink="#"
                border={true}
                margin="10px"
            >使い方</TextBox>
            <TextBox
                color="#979797"
                backgroundColor="transparent"
                fontSize={20}
                toLink="#"
                border={true}
                margin="10px"
            >TaskTreeについて</TextBox>
            { Login ?
                <div style={{
                    marginLeft: "auto",
                    marginRight: "10px"
                }}>
                    <AccountImageBadge
                        imageUrl="https://tse3.mm.bing.net/th/id/OIP.lfEcjAHH4UDkFHaiK8nt7wHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
                        size={20}
                    />
                </div>
                : (
                    <div style={{
                        marginLeft: "auto",
                        marginRight: "10px"
                    }}>
                        <ul style={{display: "flex", alignItems: "center", width: "100%"}}>
                        <TextBox
                            color="#979797"
                            backgroundColor="transparent"
                            fontSize={20}
                            toLink="#"
                            border={true}
                            margin="10px"
                        >新規登録</TextBox>
                        <TextBox
                            color="#979797"
                            backgroundColor="transparent"
                            fontSize={20}
                            toLink="#"
                            border={true}
                            margin="10px"
                        >ログイン</TextBox>
                        </ul>
                    </div>
                )
            }
        </ul>
    )
}

export const Header = (props: HeaderProps) => {
    const { Login, user } = props
    return (
        <div style={{display: "flex", backgroundColor: "#00fff2", alignItems: 'center', height: "60px"}}>
            <div style={{margin: "10px", flexShrink: 0}}>
                <Logo />
            </div>
            <HeaderList Login={Login} />
        </div>
    )
}