import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LinkText } from '@/components/atoms/LinkText'

const meta: Meta<typeof LinkText> = {
    title: 'tasktree/Atoms/LinkText',
    component: LinkText,
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
        },
        toLink: {
            control: 'text'
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof LinkText>

export const Default: Story = {
    args: {
        children: 'Google',
        color: '#111111',
        backgroundColor: 'transparent',
        toLink: "https://google.co.jp",
        margin: '0'
    }
}