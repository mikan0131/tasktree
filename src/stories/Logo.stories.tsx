import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Logo } from '@/components/molecules/Logo'

const meta: Meta<typeof Logo> = {
    title: 'tasktree/Molecules/Logo',
    component: Logo,
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Logo>
/**
 * ヘッダーやフッターに乗せるロゴ <br>
 * サイズも変更できるようにしたい <br>
 * 今のところ ロゴマークは`height: 40px; width: 40px;`に設定
 */
export const Default = {
    args:{

    }
}