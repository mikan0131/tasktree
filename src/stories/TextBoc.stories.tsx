import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TextBox } from '@/components/atoms/TextBox'

/**
 * 普通のテキストボックス
 */
const meta: Meta<typeof TextBox> = {
    title: 'tasktree/Atoms/TextBox',
    component: TextBox,
    argTypes: {
        height: {
            control: 'number'
        },
        width: {
            control: 'number'
        },
        margin: {
            control: 'text'
        },
        children: {
            control: 'text'
        },
        color: {
            control: 'color'
        },
        backgroundColor: {
            control: 'color'
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Primary',
        color: '#111111',
        backgroundColor: 'transparent'
    }
}