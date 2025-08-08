import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Header } from '@/components/organisms/header'

const meta: Meta<typeof Header> = {
    title: 'tasktree/Organisms/Header',
    component: Header,
    argTypes: {
        Login: {
            control: "boolean"
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Header>

export const NotLogin: Story = {
    args: {
        Login: false
    }
}

export const Login: Story = {
    args: {
        Login: true
    }
}