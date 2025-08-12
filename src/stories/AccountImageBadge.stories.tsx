import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AccountImageBadge } from '@/components/atoms/AccountImageBadge'

const meta: Meta<typeof AccountImageBadge> = {
    title: "tasktree/Atoms/AccountImageBadge",
    component: AccountImageBadge,
    argTypes: {
        imageUrl: {
            control: "text"
        },
        size: {
            control: "number"
        }
    },
    tags: ["autodocs"]
}

export default meta


type Story = StoryObj<typeof meta>
/**
 * ヘッダー部分の、ログインしたときに出てくるアカウントのアイコン
 */

export const Example: Story = {
    args: {
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.lfEcjAHH4UDkFHaiK8nt7wHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
        size: 30
    }
}